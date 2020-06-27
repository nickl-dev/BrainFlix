import React from "react";
import "./styles/App.scss";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Upload from "./components/Upload/Upload";
import Home from "./components/Home/Home";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/upload" component={Upload} />
        <Route path="/videos/:id" component={Home} />
      </Switch>
    </div>
  );
}
