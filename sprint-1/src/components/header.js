import React from "react";
import BrainflixLogo from "../assets/Logo/logo-brainflix.svg";
import SearchIcon from "../assets/Icons/SVG/Icon-search.svg";
import UploadIcon from "../assets/Icons/SVG/Icon-upload.svg";
import "../styles/header.scss";

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
