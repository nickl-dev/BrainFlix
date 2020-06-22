import React from "react";
import "../styles/nextVideo.scss";

export default function NextVideo(props) {
  return (
    <div className="videos__nextVideo">
      <div className="nextVideo__img">{props.image}</div>
      <div className="nextVideo__text">
        <p className="nextVideo__title">{props.title}</p>
        <p className="nextVideo__by">{props.channel}</p>
      </div>
    </div>
  );
}
