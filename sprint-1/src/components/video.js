import React from "react";
import "../styles/video.scss";
import Poster from "../assets/Images/video-list-0.jpg";
import Clip from "../assets/Video/brainstation-sample-video.mp4";
import Play from "../assets/Icons/SVG/Icon-play.svg";
import Fullscreen from "../assets/Icons/SVG/Icon-fullscreen.svg";
import Volume from "../assets/Icons/SVG/Icon-volume.svg";

export default function Video(props) {
  console.log(props)
  return (
    <div className="video__container">
      <video className="video" src={Clip} poster={Poster}></video>
      <div className="video__controls">
        <div className="video__controls-wrapper play">
          <img src={Play} alt="" className="video__icon" />
        </div>
        <div className="video__controls-wrapper slider">
          <div className="slider__bar"></div>
          <p className="video__length">0:00 / 0:42</p>
        </div>
        <div className="video__controls-wrapper fullvol">
          <img src={Fullscreen} alt="" className='video__icon' />
          <img src={Volume} alt="" className='video__icon' />
        </div>
      </div>
    </div>
  );
}
