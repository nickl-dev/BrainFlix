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
            image={nextVideo.image}
          />
        ))}
      </section>
    );
  }
}

export default VideoList;
