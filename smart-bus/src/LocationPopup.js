// LocationPopup.js
import React from "react";
import "./AuthPage.css"; // reuse your popup styles





function LocationPopup({ onAllow, onSkip }) {
  return (
    <div className="location-popup">
      <div className="popup-box">
        <h3>Enable Location</h3>
        <p>Allow location access to show nearby buses and live tracking.</p>
        <div className="popup-buttons">
          <button className="allow-btn" onClick={onAllow}>
            Allow
          </button>
          <button className="skip-btn" onClick={onSkip}>
            Skip
          </button>
        </div>
      </div>
    </div>
  );
}

export default LocationPopup;