import React from "react";
import { Link } from "react-router-dom";
import "./NextVideo.scss";

export default function NextVideo({ data }) {
  console.log(data);
  return data.map((sideVideoData) => {
    return (
      <div className="videos__nextVideo">
          <div className="nextVideo__img-container">
          <Link to={`/videos/${sideVideoData.id}`}>
      {" "}
            <img
              src={sideVideoData.image}
              alt="NextVideo thumbnail"
              className="nextVideo__img"
            />
      </Link>
          </div>
          <div className="nextVideo__text">
            <p className="nextVideo__title">{sideVideoData.title}</p>
            <p className="nextVideo__by">{sideVideoData.channel}</p>
          </div>
        </div>
    );
  });
}
