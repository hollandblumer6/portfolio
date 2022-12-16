import React from "react";
import Logo from "../../assets/images/logo.png";
import Coffee from "../../assets/images/coffee.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-icons">
        <div>
          <a className="footer-links" href="mailto:hollandblumer6@icloud.com">
            <FontAwesomeIcon
              icon={faEnvelope}
              size="lg"
              color="#F26344" /* color="#D3D3CE" */
            />
          </a>
        </div>
        <div>
          <a
            className="footer-links"
            href="https://www.linkedin.com/in/hollandblumer/"
          >
            <FontAwesomeIcon icon={faLinkedinIn} size="lg" color="#D3D3CE" />
          </a>
        </div>

        {/*  <div>
          {" "}
          <a
            className="footer-links"
            href="https://www.buymeacoffee.com/hollandblumer"
          ></a>
        </div> */}
      </div>

      <div> © Holland Blumer. All Rights Reserved. </div>
    </div>
  );
}

export default Footer;
