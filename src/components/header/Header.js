import React from "react";
import Nav from "./Nav";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";

function Header() {
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
      <div className="icons">
        {" "}
        <FontAwesomeIcon icon={faInstagram} size="xl" />{" "}
        <FontAwesomeIcon icon={faYoutube} size="xl" />
      </div>
    </div>
  );
}

export default Header;
