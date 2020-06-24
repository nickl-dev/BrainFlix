import React from "react";
import BrainflixLogo from "../assets/Logo/logo-brainflix.svg";
import "../styles/header.scss";

export default function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={BrainflixLogo} alt="BrainFlix logo" />
      <input className="header__input" type="text" placeholder="Search" />
      <div className="header__container">
        <button className="header__btn">UPLOAD</button>
        <div className="header__profile-img"></div>
      </div>
    </header>
  );
}
