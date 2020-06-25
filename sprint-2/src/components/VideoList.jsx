import React, { Component } from "react";
import NextVideo from "./NextVideo";
import "../styles/videoList.scss";
import NextVideoData from "../BrainFlixData/NextVideo.json";
import axios from "axios";

const api__url= 'https://project-2-api.herokuapp.com';
const api__key= '4a0219df-52b3-47e4-a3a5-958a1a7fa8c7';

axios.get(`${api__url}?api_key=${api__key}/videos`)
.then(response => console.log(response));

export default class VideoList extends Component {
  state = {
    nextVideoContent: NextVideoData,
  };


// axios.get(`${api__url}${api__key}`)
// .then(response => console.log(response))



  render() {
    return (
      <section className="videos">
        <h5 className="videos__heading">NEXT VIDEO</h5>
        {this.state.nextVideoContent.map((nextVideo) => (
          <NextVideo
            key={nextVideo.id}
            title={nextVideo.title}
            channel={nextVideo.channel}
            image={nextVideo.image}
          />
        ))}
      </section>
    );
  }
}

