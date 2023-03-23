const express = require("express");
const Log = require("./models/Log");
const app = express();

app.post("/", async (request, response) => {
  const user = new Log(request.body);

  try {
    await user.save();
    response.send(user);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.get("/", async (request, response) => {
  const logs = await Log.find({});

  try {
    response.send(logs);
  } catch (error) {
    response.status(500).send(error);
  }
});
module.exports = app;
