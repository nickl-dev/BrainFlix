import React, { Component } from "react";
import TopVideo from "../TopVideo/TopVideo";
import About from "../About/About";
import CommentArea from "../CommentArea/CommentArea";
import CommentForm from "../CommentForm/CommentForm";
import VideoList from "../VideoList/VideoList";
import axios from "axios";

const api__url = "https://project-2-api.herokuapp.com";
const api__key = "4a0219df-52b3-47e4-a3a5-958a1a7fa8c7";

export default class Home extends Component {
  state = {
    topVideo: [],
    sideVideos: [],
  };

  componentDidMount() {
    axios.get(`${api__url}/videos?api_key=${api__key}`).then((response) => {
      const sideVideos = response.data;
      this.setState({ sideVideos });
      console.log(sideVideos);
      axios
        .get(`${api__url}/videos/1af0jruup5gu?api_key=${api__key}`).then((topVideoResponse) => {
          const topVideo = topVideoResponse.data;
          this.setState({ topVideo });
          console.log(topVideo);
        });
    });

    // axios
    //   .get(`${api__url}/videos/1af0jruup5gu?api_key=${api__key}`).then((response) => {
    //     const mainVideo = response.data;
    //     this.setState({ mainVideo });
    //     console.log(mainVideo);
    //   });
  }

  render() {
    return (
      <div className="Home">
        <TopVideo topVideoData={this.state.topVideo} />
        <div className="desktop__container">
          <div className="desktop__subcontainer">
            <About aboutData={this.state.topVideo} />
            <CommentForm />
            <CommentArea commentData={this.state.topVideo} />
          </div>
          <VideoList data={this.state.sideVideos} />
        </div>
      </div>
    );
  }
}
