const express = require("express");
const app = express();
const brainFlixData = require("./BrainFlixData.json");

const today = new Date();
const date = `${today.getFullYear()}-${today.getMonth()}-${today.getDate()}`;
const time = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
const dateTime = `${date} ${time}`;

app.use((req, res, next) => {
  console.log(`Incoming request from ${req.path} @ ${dateTime}`);
  next();
});

app.get("/videos", (req, res) => {
  res.send(brainFlixData);
});

app.listen(8080, () => {
  console.log(`Now listening to 8080 for BrainFlix @ ${dateTime}`);
});
