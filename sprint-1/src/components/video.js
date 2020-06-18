import React from "react";
import "../styles/video.scss";

export default function Video() {
  return (
    <div className="video__container">
      <video
        className="video"
        src="../assets/Video/brainstation-sample-video.mp4"
        controls
      ></video>
    </div>
  );
}
