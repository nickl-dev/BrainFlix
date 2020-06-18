import React from "react";
import "./styles/App.scss";
import Header from "./components/header";
import Video from "./components/video";
import Highlights from "./components/highlights";
import CommentForm from "./components/commentForm";
import CommentArea from "./components/commentArea";
import VideoList from './components/videoList';


function App() {
  return (
    <div className="App">
      <Header />
      <Video />
      <Highlights />
      <CommentForm />
      <CommentArea />
      <VideoList/>
    </div>
  );
}

export default App;