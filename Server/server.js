const express = require("express");
const mongoose = require("mongoose");
const connectDb = require("./config/db");
const Router = require("./routes");
const cors = require("cors");

connectDb();
const app = express();
app.use(cors());
app.use(express.json());
app.use(Router);

app.listen(4000, () => {
  console.log("Server is running at port 4000");
});
