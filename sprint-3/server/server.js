const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const brainFlixData = require("./BrainFlixData.json");

const today = new Date();
const date = `${today.getFullYear()}-${today.getMonth()}-${today.getDate()}`;
const time = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
const dateTime = `${date} ${time}`;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  console.log(`Incoming request from ${req.path} @ ${dateTime}`);
  next();
});

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
  res.send(videoArray);
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
  res.send(topVideo[0]);
});

app.get("/videos/:id", (req, res) => {
  let newVideo = brainFlixData.filter(
    (data, index) => data.id === req.params.id
  );
  res.send(newVideo.pop());
});

app.post("/videos", (req, res) => {
  console.log(req.body);
  brainFlixData.push({
    id: Date.now().toString(),
    title: req.body.title,
    channel: "My Channel",
    image: "https://blog.passmefast.co.uk/images/youtube-video-icon-feature-image.jpg",
    description: req.body.description,
    views: "100",
    likes: "100",
    duration: "5:00",
    video: "https://project-2-api.herokuapp.com/stream",
    timestamp: 1545162149000,
    comments: [
      {
        name: "Micheal Lyons",
        comment:
          "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of acconcert I have EVER witnessed.",
        id: "1ab6d9f6-da38-456e-9b09-ab0acd9ce818",
        likes: 0,
        timestamp: 1545162149000,
      },
      {
        name: "Gary Wong",
        comment:
          "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!",
        id: "cc6f173d-9e9d-4501-918d-bc11f15a8e14",
        likes: 0,
        timestamp: 1544595784046,
      },
      {
        name: "Theodore Duncan",
        comment:
          "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!",
        id: "993f950f-df99-48e7-bd1e-d95003cc98f1",
        likes: 0,
        timestamp: 1542262984046,
      },
    ],
  });
  res.json(brainFlixData);
});

app.listen(8080, () => {
  console.log(
    `Now listening at port 8080 for BrainFlix sprint 3 @ ${dateTime}`
  );
});
