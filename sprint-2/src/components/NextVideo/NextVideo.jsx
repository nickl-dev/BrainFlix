import React from "react";
import { Link } from "react-router-dom";
import "./NextVideo.scss";

export default function NextVideo({ data }) {
  console.log(data);
  return data.map((sideVideoData) => {
    return (
      <Link to={`/videos/${sideVideoData.id}`}>
        {" "}
        <div className="videos__nextVideo">
          <div className="nextVideo__img-container">
            <img
              src={sideVideoData.image}
              alt="NextVideo thumbnail"
              className="nextVideo__img"
            />
          </div>
          <div className="nextVideo__text">
            <p className="nextVideo__title">{sideVideoData.title}</p>
            <p className="nextVideo__by">{sideVideoData.channel}</p>
          </div>
        </div>
      </Link>
    );
  });
}
