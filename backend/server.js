const express = require("express");
const app = require("./src/app");
const path = require("path");

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
