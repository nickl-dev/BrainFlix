import React from "react";
import BrainflixLogo from "../assets/Logo/logo-brainflix.png";
import SearchIcon from "../assets/Icons/PNG/icon-search.png";

export default function Header() {
  return (
    <div>
      <header className="header">
        <img
          className="header__logo"
          src={BrainflixLogo}
          alt="BrainFlix logo"
        />
        <input className="header__input" type="text" placeholder="Search" />
        <div className="header__container">
          <button className="header__btn">UPLOAD</button>
          <div className="header__profile-img"></div>
        </div>
      </header>
    </div>
  );
}
