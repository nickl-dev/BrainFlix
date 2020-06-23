import React, { Component } from "react";
import "../styles/highlights.scss";
import IconViews from "../assets/Icons/SVG/Icon-views.svg";
import IconLikes from "../assets/Icons/SVG/Icon-likes.svg";

export default function Highlights(props) {
  return (
    <main className="highlights">
      <h1 className="highlights__heading">{props.data.title}</h1>
      <div className="highlights__subtext">
        <div className="highlights__by-time">
          <h2 className="highlights__by">{props.data.channel}</h2>
          <p className="highlights__timestamp">{props.data.timestamp}</p>
        </div>
        <div className="highlights__views-likes">
          <img className="highlights__icons" src={IconViews} alt="Views icon" />
          <p className="highlights__views">{props.data.views}</p>
          <img className="highlights__icons" src={IconLikes} alt="Likes icon" />
          <p className="highlights__likes">{props.data.likes}</p>
        </div>
      </div>
      <p className="highlights__paragraph">{props.data.description}</p>
    </main>
  );
}
