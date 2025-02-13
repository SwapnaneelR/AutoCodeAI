const express = require("express");
const app = require("./src/app");
const path = require("path");

const port = process.env.PORT || 5000;
const dirname = path.resolve();
app.use(express.static(path.join(dirname, "/frontend/dist")));
app.get("*", (_, res) => {
  res.sendFile(path.resolve(dirname, "frontend", "dist", "index.html"));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
