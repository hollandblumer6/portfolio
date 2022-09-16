import React from "react";
import Logo from "../../assets/images/logo.png";

function Footer() {
  return (
    <div className="footer">
      <div className="legal">
        <p>
          <a href="mailto: hollandblumer6@icloud.com">Contact</a>
        </p>
        <p>
          {" "}
          <a href="https://www.buymeacoffee.com/hollandblumer">
            Buy Me a Coffee
          </a>
        </p>
      </div>
      <div>
        <p> © Holland Blumer. All Rights Reserved. </p>
      </div>
    </div>
  );
}

export default Footer;
