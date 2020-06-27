import React from "react";
import "./About.scss";
import IconViews from "../../assets/Icons/SVG/Icon-views.svg";
import IconLikes from "../../assets/Icons/SVG/Icon-likes.svg";

export default function About({ aboutData }) {
  const date = new Date(aboutData.timestamp);
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const year = date.getFullYear();
  const timeStamp = `${month}/${day}/${year}`;

  return (
    <main className="highlights">
      <h1 className="highlights__heading">{aboutData.title}</h1>
      <div className="highlights__subtext">
        <div className="highlights__by-time">
          <h2 className="highlights__by">{aboutData.channel}</h2>
          <p className="highlights__timestamp">{timeStamp}</p>
        </div>
        <div className="highlights__views-likes">
          <img className="highlights__icons" src={IconViews} alt="Views icon" />
          <p className="highlights__views">{aboutData.views}</p>
          <img className="highlights__icons" src={IconLikes} alt="Likes icon" />
          <p className="highlights__likes">{aboutData.likes}</p>
        </div>
      </div>
      <p className="highlights__paragraph">{aboutData.description}</p>
    </main>
  );
}
