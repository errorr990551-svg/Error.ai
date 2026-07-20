import express from "express";
import cors from "cors";
import serverless from "serverless-http";
import dotenv from "dotenv";

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
  res.status(200).send("OK");
});

app.use("/api", contactRoutes);
app.use("/api", complaintRoutes);
app.use("/api", applicationRoutes);

const handler = serverless(app);

// Cloudflare Workers ES Module export default
export default {
  async fetch(request, env, ctx) {
    if (env) {
      if (env.RESEND_API_KEY) process.env.RESEND_API_KEY = env.RESEND_API_KEY;
      if (env.RESEND_FROM) process.env.RESEND_FROM = env.RESEND_FROM;
      if (env.NOTIFICATION_EMAIL) process.env.NOTIFICATION_EMAIL = env.NOTIFICATION_EMAIL;
    }
    return handler(request, env, ctx);
  }
};
