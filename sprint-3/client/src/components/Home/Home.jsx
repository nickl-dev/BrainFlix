import React, { Component } from "react";
import TopVideo from "../TopVideo/TopVideo";
import About from "../About/About";
import CommentArea from "../CommentArea/CommentArea";
import CommentForm from "../CommentForm/CommentForm";
import VideoList from "../VideoList/VideoList";
import axios from "axios";

// const api__url = "https://project-2-api.herokuapp.com";
// const api__key = "4a0219df-52b3-47e4-a3a5-958a1a7fa8c7";

const API_URL = "http://localhost:8080";

export default class Home extends Component {
  state = {
    topVideo: {},
    sideVideos: [],
  };

  componentDidMount() {
    // axios.get(`${api__url}/videos?api_key=${api__key}`)
    axios.get(`${API_URL}/videos`).then((response) => {
      console.log(response);
      const sideVideos = response.data;
      this.setState({ sideVideos });

      axios.get(`${API_URL}/videos/1af0jruup5gu`).then((topVideoResponse) => {
        const topVideo = topVideoResponse.data;
        console.log(topVideo);
        this.setState({ topVideo });
      });

      if (!this.props.match.params.id) {
        // axios.get(`${api__url}/videos/1af0jruup5gu?api_key=${api__key}`)
        console.log('hello there');
        axios.get(`${API_URL}/videos/1af0jruup5gu`)
          .then((topVideoResponse) => {
            const topVideo = topVideoResponse.data;
            this.setState({ topVideo });
          });

      } else {
        // axios.get(`${api__url}/videos/${this.props.match.params.id}?api_key=${api__key}`)
        axios.get(`${API_URL}/videos/${this.props.match.params.id}`)
          .then((topVideoResponse) => {
            const topVideo = topVideoResponse.data;
            this.setState({ topVideo });
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("CDU", this.props.match.params.id, prevProps.match.params.id);
    // console.log(prevProps.match.params.id);

    if (this.props.match.params.id !== prevProps.match.params.id) {
      // console.log(this.props.match.params.id);
      if (this.props.match.params.id === undefined) {
        // console.log(this.props.match.params.id);
        this.props.match.params.id = "1af0jruup5gu";
      }
      axios
        .get(`${API_URL}/videos/${this.props.match.params.id}`)
        .then((newVideo) => {
          console.log(Array.isArray(newVideo.data));
          let topVideo;
          // If newVideo.data is an Array, set topVideo to be first item in Array.
          if (Array.isArray(newVideo.data)) {
            topVideo = newVideo.data[0];
          } else {
            topVideo = newVideo.data;
          }
          // If newVideo.data is an object, set topVideo to be newVideo.data
          this.setState({ topVideo });
        })
        .catch((err) => {
          console.log(err);
        });
    }
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
          <VideoList
            data={this.state.sideVideos}
            videoData={this.state.topVideo}
          />
        </div>
      </div>
    );
  }
}
