import React, { Component } from "react";
import "./styles/App.scss";
import Header from "./components/Header";
import Video from "./components/Video";
import Highlights from "./components/Highlights";
import CommentForm from "./components/CommentForm";
import CommentArea from "./components/CommentArea";
import VideoList from "./components/VideoList";
import MainVideoData from "./BrainFlixData/MainVideo.json";

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
