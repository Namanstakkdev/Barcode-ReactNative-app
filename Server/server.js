const express = require("express");
const mongoose = require("mongoose");
const connectDb = require("./config/db");
const Router = require("./routes");

connectDb();

const app = express();

app.use(express.json());
app.use(Router);

app.listen(3000, () => {
  console.log("Server is running at port 3000");
});
