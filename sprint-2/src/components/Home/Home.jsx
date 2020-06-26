import React, { Component } from "react";
import Video from "../Video/Video";
import Highlights from "../Highlights/Highlights";
import CommentArea from "../CommentArea/CommentArea";
import CommentForm from "../CommentForm/CommentForm";
import VideoList from "../VideoList/VideoList";
import MainVideoData from "../../BrainFlixData/MainVideo.json";
import axios from "axios";
const api__url = "https://project-2-api.herokuapp.com";
const api__key = "4a0219df-52b3-47e4-a3a5-958a1a7fa8c7";

export default class Home extends Component {
  state = {
    sideVideos: [],
    mainVideo: [],
  };

  componentDidMount() {
    axios
      .get(`${api__url}/videos?api_key=${api__key}`)
      .then((response) => console.log(response.data))
      .catch((err) => console.log(err));

    axios
      .get(`${api__url}/videos/1af0jruup5gu?api_key=${api__key}`)
      .then((response) => console.log(response.data))
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div className="Home">
        <Video data={MainVideoData} />
        <div className="desktop__container">
          <div className="desktop__subcontainer">
            <Highlights data={MainVideoData} />
            <CommentForm />
            <CommentArea />
          </div>
          {/* <VideoList /> */}
          {this.state.sideVideos.map(sideVideo => <VideoList />)}
        </div>
      </div>
    );
  }
}
