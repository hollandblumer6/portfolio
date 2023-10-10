import React, { useState, useEffect } from "react";
import "../../styles/popup/popup.css";
import PopupBackground from "../../assets/videos/popupbackground.mp4";

function Popup() {
  const [showPopup, setShowPopup] = useState(true); // Initially set to true to show the popup

  useEffect(() => {
    // Check if the user has already closed the popup (stored in local storage)
    const hasClosedPopup = localStorage.getItem("hasClosedPopup");

    // If the user has closed the popup, hide it
    if (hasClosedPopup === "true") {
      setShowPopup(false);
    }
  }, []);

  const closePopup = () => {
    // Mark the popup as closed in local storage
    localStorage.setItem("hasClosedPopup", "true");
    setShowPopup(false);
  };

  return (
    showPopup && (
      <div className="popup">
        <div className="popup-video-container">
          <video id="popup-video" controls autoPlay loop muted>
            {" "}
            <source src={PopupBackground} type="video/mp4"></source>
          </video>
        </div>
        <div className="popup-content">
          <div> Holland Blumer</div>
          <div className="portfolio-text"> PORTFOLIO </div>
          <button onClick={closePopup}>Enter</button>
        </div>
      </div>
    )
  );
}

export default Popup;
