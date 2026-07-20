const express = require("express");
const cors = require("cors");
const serverless = require("serverless-http");
require("dotenv").config();

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

app.use("/api", require("./routes/contactRoutes"));
app.use("/api", require("./routes/complaintRoutes"));
app.use("/api", require("./routes/applicationRoutes"));

const handler = serverless(app);

// Cloudflare Workers handler export
module.exports = {
  async fetch(request, env, ctx) {
    if (env) {
      if (env.RESEND_API_KEY) process.env.RESEND_API_KEY = env.RESEND_API_KEY;
      if (env.RESEND_FROM) process.env.RESEND_FROM = env.RESEND_FROM;
      if (env.NOTIFICATION_EMAIL) process.env.NOTIFICATION_EMAIL = env.NOTIFICATION_EMAIL;
    }
    return handler(request, env, ctx);
  }
};

// Local development listener
if (process.env.NODE_ENV !== "production") {
  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
  });
}
