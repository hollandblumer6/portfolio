import React, { useRef, useState } from "react";
import Nav from "./Nav";
import Movie from "../../assets/videos/background-video.mp4";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faPause, faPlay } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const videoRef = useRef();

  const [isPlaying, setIsPlaying] = useState(true);

  console.log(videoRef);

  const handlePause = () => {
    videoRef.current.pause();
    setIsPlaying(false);
  };
  const handlePlay = () => {
    videoRef.current.play();
    setIsPlaying(true);
  };

  return (
    <div className="header">
      <div className="vertical-text">
        {" "}
        <h4>Portfolio</h4>{" "}
      </div>
      <div className="header-content">
        <div className="header-name"></div>
        <div className="nav-links">
          {" "}
          <Nav />
        </div>
      </div>
      <div className="right-header">
        {isPlaying ? (
          <button className="btn pause-btn" onClick={handlePause}>
            <FontAwesomeIcon icon={faPause} size="lg" className="pause-btn" />
          </button>
        ) : (
          <button className="btn pause-btn" onClick={handlePlay}>
            <FontAwesomeIcon icon={faPlay} size="md" className="pause-btn" />
          </button>
        )}

        <div className="icons">
          {" "}
          <a
            className="header-links"
            href="https://www.instagram.com/hollandblumer/"
          >
            <FontAwesomeIcon icon={faInstagram} size="xl" className="icon" />
          </a>{" "}
          <a
            className="header-links"
            href="https://www.youtube.com/channel/UC1PqIZ5jGFwBZ0260ImbQpQ"
          >
            <FontAwesomeIcon icon={faYoutube} size="xl" />
          </a>{" "}
        </div>
        <div className="place-holder"> </div>
      </div>
      <video id="background-video" controls autoPlay loop muted ref={videoRef}>
        {" "}
        <source src={Movie} type="video/mp4"></source>
      </video>
    </div>
  );
}

export default Header;
