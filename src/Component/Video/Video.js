// Video.js

import React from 'react';
import PlayButtonIcon from './PlayButtonIcon'; // Import your play button icon
import "./Video.css"
import imageUrl from "../../images/cta2.jpg"

const Video = () => {
  const playVideo = () => {
    // Function to handle playing the video
    // You can implement logic to play the video here
    console.log('Video will play');
  };

  return (
    <div className="image-container">
      <img className="image" src={imageUrl} alt="Image" />
      <a href="https://www.youtube.com/embed/-mlDOdjGAHc" className="play-button" data-type="irframe" onClick={playVideo}>
        <PlayButtonIcon /> {/* Render your play button icon */}
      </a>
    </div>
  );
};

export default Video;
