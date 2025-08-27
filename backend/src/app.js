require("dotenv").config();
const express = require("express");
const cors = require("cors");
const aiRoutes = require("./routes/ai.routes");

const app = express();

// Restrict CORS to the frontend origin and ensure OPTIONS preflight is handled
// Allow configuring the allowed origin via environment variable for deployed envs
const FRONTEND_ORIGIN = process.env.FRONTEND_URL || "https://auto-code-ai.vercel.app";

console.log("Using FRONTEND_ORIGIN for CORS:", FRONTEND_ORIGIN);

// Use cors middleware with explicit options
app.use(cors({
  origin: FRONTEND_ORIGIN,
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization", "Origin", "Accept"],
  credentials: true,
  optionsSuccessStatus: 200,
}));

// Fallback: ensure every response includes the header (covers edge cases where middleware
// might not run in serverless environments).
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", FRONTEND_ORIGIN);
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,PATCH,DELETE,OPTIONS");
  res.header("Access-Control-Allow-Credentials", "true");
  if (req.method === "OPTIONS") return res.sendStatus(200);
  next();
});

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Works");
});

app.use("/ai", aiRoutes);

module.exports = app;
