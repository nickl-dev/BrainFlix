import React from "react";
import "./styles/App.scss";
import Header from "./components/header";
import Video from "./components/video";
import Highlights from "./components/highlights";
import CommentForm from "./components/commentForm";
import CommentArea from "./components/commentArea";
import VideoList from "./components/videoList";

export default function App() {
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

