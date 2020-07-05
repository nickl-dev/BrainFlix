const express = require("express");
const app = express();
const cors = require("cors");
const brainFlixData = require("./BrainFlixData.json");

const today = new Date();
const date = `${today.getFullYear()}-${today.getMonth()}-${today.getDate()}`;
const time = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
const dateTime = `${date} ${time}`;

app.use((req, res, next) => {
  console.log(`Incoming request from ${req.path} @ ${dateTime}`);
  next();
});
app.use(cors());

app.get("/videos", (req, res) => {
  let videoArray = [];
  brainFlixData.map((data) => {
    videoArray.push({
      id: data.id,
      title: data.title,
      channel: data.channel,
      image: data.image,
    });
  });
  res.json(videoArray);
});

app.get("/videos/1af0jruup5gu", (req, res) => {
  let topVideo = [];
  brainFlixData.map((data) => {
    topVideo.push({
      id: data.id,
      title: data.title,
      channel: data.channel,
      image: data.image,
      description: data.description,
      views: data.views,
      likes: data.likes,
      duration: data.duration,
      video: data.video,
      timestamp: data.timestamp,
      comments: data.comments,
    });
  });
  res.json(topVideo[0]);
});

app.get("/videos/:id", (req, res) => {
  let newVideo = brainFlixData.filter((data, index) => {
    return data.id === req.params.id;
  });
  console.log(newVideo);
  res.json(newVideo);
});

app.listen(8080, () => {
  console.log(
    `Now listening at port 8080 for BrainFlix sprint 3 @ ${dateTime}`
  );
});
