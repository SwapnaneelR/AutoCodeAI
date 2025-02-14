require("dotenv").config();
const express = require("express");
const cors = require("cors");
const aiRoutes = require("./routes/ai.routes");

const app = express();
app.get("/", (req, res) => {
  res.send("Works");
});
app.use(express.json());
app.use(cors());
app.use("/ai", aiRoutes);

module.exports = app;
