import React, { Component } from "react";
import NextVideo from "./nextVideo";
import "../styles/videos.scss";
import NextVideoData from "../BrainFlixData/nextVideo.json";

class VideoList extends Component {
  state = {
    nextVideoContent: NextVideoData,
  };

  render() {
    return (
      <section className="videos">
        {this.state.nextVideoContent.map((nextVideo) => (
          <NextVideo
            key={nextVideo.key}
            title={nextVideo.title}
            channel={nextVideo.channel}
            // img={nextVideo.img}
          />
        ))}
        {/* <h5 className="videos__heading">NEXT VIDEO</h5>
        <NextVideo
          title="Become A Travel Pro In
One Easy Lesson…"
          by="Scotty Cranmer
"
        />
        <NextVideo
          title="Les Houches The
Hidden Gem Of The…"
          by="Scotty Cranmer
"
        />
        <NextVideo
          title="Travel Health Useful
Medical Information…"
          by="Scotty Cranmer
"
        />
        <NextVideo
          title="Cheap Airline Tickets
Great Ways To Save"
          by="Emily Harper
"
        />
        <NextVideo
          title="Take A Romantic Break
In A Boutique Hotel"
          by="Ethan Owen
"
        />
        <NextVideo
          title="Choose The Perfect
Accommodations"
          by="Lydia Perez
"
        />
        <NextVideo
          title="Cruising Destination
Ideas"
          by="Timothy Austin
"
        />
        <NextVideo
          title="Train Travel On Track
For Safety"
          by="Scotty Cranmer"
        /> */}
      </section>
    );
  }
}

export default VideoList;
