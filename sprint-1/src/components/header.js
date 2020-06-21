import React from "react";
import BrainflixLogo from "../assets/Logo/logo-brainflix.svg";
import UploadIcon from "../assets/Icons/SVG/Icon-upload.svg";
import "../styles/header.scss";

// import axios from "axios";

// const getMainVideoData = () => {
//   axios
//     .get("../../mainVideo.json")
//     .then((response) => {
//       console.log(response);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };
// getMainVideoData();

export default function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={BrainflixLogo} alt="BrainFlix logo" />
      <input className="header__input" type="text" placeholder="Search" />
      <div className="header__container">
        <button className="header__btn">
          <img src={UploadIcon} alt="" className="btn__icon" />
          UPLOAD
        </button>
        <div className="header__profile-img"></div>
      </div>
    </header>
  );
}
