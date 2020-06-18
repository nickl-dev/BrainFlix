import React from "react";
import "../styles/video.scss";
import Poster from "../assets/Images/video-list-0.jpg";
import Clip from "../assets/Video/brainstation-sample-video.mp4";

export default function Video(props) {
  return (
    <div className="video__container">
      <video className="video" src={Clip} poster={Poster} controls></video>
    </div>
  );
}
