import React from "react";
import "./Upload.scss";
import SampleVideo from "../../assets/Video/brainstation-sample-video.mp4";

export default function Upload() {
  return (
    <main className="upload">
      <h1 className="upload__heading">Upload Video</h1>
      <div className="upload__video-input">
        <div className="upload__video-wrapper">
      <label htmlFor={SampleVideo} className='upload__label'>VIDEO THUMBNAIL</label>
            <video src={SampleVideo} className="upload__video"></video>
        </div>
            <div className="upload__input-wrapper">
            <label htmlFor="upload__add-title" className='upload__label'>TITLE YOUR VIDEO</label>
            <input type="text" name='upload__add-title' className='upload__add-title upload__input' placeholder='Add a title to your video'/>
            <label htmlFor="upload__add-description" className='upload__label'>ADD A VIDEO DESCRIPTION</label>
            <textarea type="text" name='upload__add-description' className='upload__add-description upload__input' placeholder='Add a description of your video'/>
        </div>
      </div>
      <div className="upload__bottom-wrapper">
        <button className='upload__btn'>PUBLISH</button>
        <h2 className="upload__cancel">CANCEL</h2>
      </div>
        
    </main>

  );
}
