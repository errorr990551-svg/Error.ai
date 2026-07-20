import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Readable, Writable } from "node:stream";

dotenv.config();

import contactRoutes from "./routes/contactRoutes.js";
import complaintRoutes from "./routes/complaintRoutes.js";
import applicationRoutes from "./routes/applicationRoutes.js";

const app = express();

app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
}));

app.use(express.json());

app.get("/health", (req, res) => {
  res.status(200).json({ status: "OK", timestamp: new Date().toISOString() });
});

app.use("/api", contactRoutes);
app.use("/api", complaintRoutes);
app.use("/api", applicationRoutes);

// Cloudflare Workers fetch handler
export default {
  async fetch(request, env, ctx) {
    // 1. Populate process.env from Cloudflare Worker env
    if (env) {
      for (const [key, value] of Object.entries(env)) {
        if (typeof value === "string") {
          process.env[key] = value;
        }
      }
    }

    // 2. Handle preflight CORS OPTIONS request directly
    if (request.method === "OPTIONS") {
      return new Response(null, {
        status: 204,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type, Authorization",
        },
      });
    }

    // 3. Adapt Cloudflare Request object to Express req/res
    return new Promise(async (resolve) => {
      try {
        const url = new URL(request.url);
        const reqBodyBuffer = await request.arrayBuffer();

        const reqHeaders = {};
        for (const [k, v] of request.headers.entries()) {
          reqHeaders[k.toLowerCase()] = v;
        }

        const reqStream = new Readable({
          read() {
            this.push(Buffer.from(reqBodyBuffer));
            this.push(null);
          },
        });

        Object.assign(reqStream, {
          method: request.method,
          url: url.pathname + url.search,
          headers: reqHeaders,
          rawHeaders: Array.from(request.headers.entries()).flat(),
        });

        const responseHeaders = new Headers({
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type, Authorization",
        });

        let statusCode = 200;
        const responseChunks = [];

        const resStream = new Writable({
          write(chunk, encoding, callback) {
            responseChunks.push(Buffer.from(chunk));
            callback();
          },
        });

        resStream.setHeader = (name, value) => {
          responseHeaders.set(name, value);
        };
        resStream.getHeader = (name) => responseHeaders.get(name);
        resStream.removeHeader = (name) => responseHeaders.delete(name);
        resStream.writeHead = (code, headers) => {
          statusCode = code;
          if (headers) {
            for (const [k, v] of Object.entries(headers)) {
              responseHeaders.set(k, v);
            }
          }
        };

        resStream.on("finish", () => {
          const body = Buffer.concat(responseChunks);
          resolve(
            new Response(body, {
              status: statusCode,
              headers: responseHeaders,
            })
          );
        });

        app(reqStream, resStream);
      } catch (err) {
        console.error("Worker handling error:", err);
        resolve(
          new Response(JSON.stringify({ success: false, message: err.message }), {
            status: 500,
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
            },
          })
        );
      }
    });
  },
};
