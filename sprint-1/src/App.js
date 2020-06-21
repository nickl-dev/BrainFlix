import React, { Component } from "react";
import "./styles/App.scss";
import Header from "./components/header";
// import Video from "./components/video";
import Highlights from "./components/highlights";
import CommentForm from "./components/commentForm";
import CommentArea from "./components/commentArea";
import Video from "./components/video";
import VideoList from "./components/videoList";

class App extends Component {
  state = {};
  render() {
    return (
      <div className="App">
        <Header />
        <Video />
        <div className="desktop__container">
          <div className="desktop__subcontainer">
            <Highlights />
            <CommentForm />
            <CommentArea />
          </div>
          <VideoList />
        </div>
      </div>
    );
  }
}

export default App;
