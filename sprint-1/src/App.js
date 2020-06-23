import React, { Component } from "react";
import "./styles/App.scss";
import Header from "./components/header";
import Video from "./components/video";
import Highlights from "./components/highlights";
import CommentForm from "./components/commentForm";
import CommentArea from "./components/commentArea";
import VideoList from "./components/videoList";
import MainVideoData from "./BrainFlixData/mainVideo.json";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Video data={MainVideoData} />
        <div className="desktop__container">
          <div className="desktop__subcontainer">
            <Highlights data={MainVideoData} />
            <CommentForm />
            <CommentArea />
          </div>
          <VideoList />
        </div>
      </div>
    );
  }
}
