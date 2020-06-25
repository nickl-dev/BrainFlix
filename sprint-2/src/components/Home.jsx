import React from "react";
import Video from "../components/Video";
import Highlights from "../components/Highlights";
import CommentArea from '../components/CommentArea';
import CommentForm from '../components/CommentForm';
import VideoList from "../components/VideoList";
import MainVideoData from "../BrainFlixData/MainVideo.json";

export default function Home() {
  return (
    <div className="Home">
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
