import React, { Component } from "react";
import istuminen_tappaa from '../../content/videos/istuminen_tappaa.mp4'
import "./video.css"

class Video extends Component {
  render() {
    return (
      <div>
        <video className="video" src={istuminen_tappaa} controls="controls" autoPlay={true} muted={true}/>
      </div>
    );
  }
}

export default Video;