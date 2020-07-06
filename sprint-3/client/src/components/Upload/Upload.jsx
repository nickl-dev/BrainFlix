import React, { Component } from "react";
import "./Upload.scss";
import SampleVideo from "../../assets/Video/brainstation-sample-video.mp4";
import UploadPoster from "../../assets/Images/upload-video-preview.jpg";
import { Link } from "react-router-dom";
import axios from "axios";

export default class Upload extends Component {
  state = {
    title: "",
    description: "",
    image: "",
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    console.log("hello there");

    const { title, description, image } = this.state;

    axios
      .post("http://localhost:8080/videos", { title, description, image })
      .then((res) => {
        const uploadData = res.data;
        console.log(uploadData);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    const { title, description} = this.state;

    return (
      <main className="upload">
        <h1 className="upload__heading">Upload Video</h1>
        <form className="upload__form" onSubmit={this.onSubmit}>
          <div className="upload__video-input">
            <div className="upload__video-wrapper">
              <label htmlFor={SampleVideo} className="upload__label">
                VIDEO THUMBNAIL
              </label>
              <video poster={UploadPoster} className="upload__video"></video>
              <div className="upload__video"></div>
            </div>
            <div className="upload__input-wrapper">
              <label htmlFor="title" className="upload__label">
                TITLE YOUR VIDEO
              </label>
              <input
                type="text"
                name="title"
                className="upload__add-title upload__input"
                placeholder="Add a title to your video"
                value={title}
                onChange={this.onChange}
              />
              <label htmlFor="description" className="upload__label">
                ADD A VIDEO DESCRIPTION
              </label>
              <textarea
                type="text"
                name="description"
                className="upload__add-description upload__input"
                placeholder="Add a description of your video"
                value={description}
                onChange={this.onChange}
              />
            </div>
          </div>
          <div className="upload__bottom-wrapper">
            <button className="upload__btn" type="submit">
              PUBLISH
            </button>
            <h2 className="upload__cancel">
              <Link to="/">CANCEL</Link>
            </h2>
          </div>
        </form>
      </main>
    );
  }
}
