import React from "react";
import "./TopVideo.scss";
import Play from "../../assets/Icons/SVG/Icon-play.svg";
import Fullscreen from "../../assets/Icons/SVG/Icon-fullscreen.svg";
import Volume from "../../assets/Icons/SVG/Icon-volume.svg";

export default function TopVideo({ topVideoData }) {
  return (
    <div className="video__container">
      <video className="video" src={topVideoData.video} poster={topVideoData.image}></video>
      <div className="video__controls">
        <div className="video__controls-wrapper play">
          <img src={Play} alt="Play icon" className="video__icon" />
        </div>
        <div className="video__controls-wrapper slider">
          <div className="slider__bar"></div>
          <p className="video__length">{`0:00/${topVideoData.duration}`}</p>
        </div>
        <div className="video__controls-wrapper fullvol">
          <img src={Fullscreen} alt="Fullscreen icon" className="video__icon" />
          <img src={Volume} alt="Volume icon" className="video__icon" />
        </div>
      </div>
    </div>
  );
}
