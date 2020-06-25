import React, { Component } from "react";
import "./styles/App.scss";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Upload from "./components/Upload";
import Home from "./components/Home";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/upload" component={Upload} />
        </Switch>
      </div>
    );
  }
}
