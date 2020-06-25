import React from "react";
import BrainflixLogo from "../assets/Logo/logo-brainflix.svg";
import "../styles/header.scss";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
        <Link to='/'><img className="header__logo" src={BrainflixLogo} alt="BrainFlix logo"/></Link>
      <input className="header__input" type="text" placeholder="Search" />
      <div className="header__container">
        <button className="header__btn"><Link to='/upload'>UPLOAD</Link></button>
        <div className="header__profile-img"></div>
      </div>
    </header>
  );
}
