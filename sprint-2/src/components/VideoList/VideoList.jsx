import React from "react";
import NextVideo from "../NextVideo/NextVideo";
import "./VideoList.scss";

export default function VideoList({ data, videoData }) {
  return (
    <section className="videos">
      <h5 className="videos__heading">NEXT VIDEO</h5>
      <NextVideo data={data} key={data.id} videoData={videoData} />
    </section>
  );
}
