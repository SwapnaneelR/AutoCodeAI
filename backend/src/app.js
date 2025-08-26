require("dotenv").config();
const express = require("express");
const cors = require("cors");
const aiRoutes = require("./routes/ai.routes");

const app = express();
 
app.use(cors(
  {
    origin: "https://auto-code-ai.vercel.app/",
  }
))

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Works");
});

app.use("/ai", aiRoutes);

module.exports = app;
