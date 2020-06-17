import React from "react";
import "./styles/App.scss";
import Header from "./components/header";
import Video from "./components/video";
import Highlights from "./components/highlights";

function App() {
  return (
    <div className="App">
      <Header />
      <Video />
      <Highlights />
    </div>
  );
}

export default App;
