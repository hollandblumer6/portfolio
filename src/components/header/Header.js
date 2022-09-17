import React, { useRef } from "react";
import Nav from "./Nav";
import Movie from "../../assets/videos/background-video.mp4";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faPause } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const videoRef = useRef();

  const handlePause = () => {
    videoRef.current.pause();
  };
  const handlePlay = () => {
    videoRef.current.play();
  };

  return (
    <div className="header">
      <div className="vertical-text">
        {" "}
        <h4>Portfolio</h4>{" "}
      </div>
      <div className="header-content">
        <div className="header-name">
          <h1> HOLLAND BLUMER</h1>
        </div>
        <div className="nav-links">
          {" "}
          <Nav />
        </div>
      </div>
      <div className="right-header">
        <button className="btn pause-btn" onClick={handlePause}>
          <FontAwesomeIcon icon={faPause} size="lg" className="pause-btn" />
        </button>
        <div className="icons">
          {" "}
          <FontAwesomeIcon icon={faInstagram} size="xl" className="icon" />{" "}
          <FontAwesomeIcon icon={faYoutube} size="xl" />
        </div>
      </div>

      <video id="background-video" controls autoPlay loop muted ref={videoRef}>
        {" "}
        <source src={Movie} type="video/mp4"></source>
      </video>
    </div>
  );
}

export default Header;
