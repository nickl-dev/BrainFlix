import React, { Component } from "react";
import "../styles/highlights.scss";
import IconViews from "../assets/Icons/SVG/Icon-views.svg";
import IconLikes from "../assets/Icons/SVG/Icon-likes.svg";
import mainVideoData from "../BrainFlixData/mainVideo.json";

console.log(mainVideoData);

export default class Highlights extends Component {
  state = {
    highlightsContent: mainVideoData,
  };

  render() {
    return (
      <main className="highlights">
        <h1 className="highlights__heading">BMX Rampage: 2018 Highlights</h1>
        <div className="highlights__subtext">
          <div className="highlights__by-time">
            <h2 className="highlights__by">By Red Cow</h2>
            <p className="highlights__timestamp">12/18/2018</p>
          </div>
          <div className="highlights__views-likes">
            <img
              className="highlights__icons"
              src={IconViews}
              alt="Views icon"
            />
            <p className="highlights__views">1,001,023</p>
            <img
              className="highlights__icons"
              src={IconLikes}
              alt="Likes icon"
              href="#"
            />
            <p className="highlights__likes">110,985</p>
          </div>
        </div>
        <p className="highlights__paragraph">
          On a gusty day in Southern Utah, a group of 25 daring mountain bikers
          blew the doors off what is possible on two wheels, unleashing some of
          the biggest moments the sport has ever seen. While mother nature only
          allowed for one full run before the conditions made it impossible to
          ride, that was all that was needed for event veteran Kyle Strait, who
          won the event for the second time -- eight years after his first Red
          Cow Rampage title
        </p>
      </main>
    );
  }
}
