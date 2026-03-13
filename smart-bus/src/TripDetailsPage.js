import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import "./TripDetailsPage.css";
import { IoCalendarOutline, IoTimeOutline } from "react-icons/io5";

function TripDetailsPage() {

  const navigate = useNavigate();

  const [time, setTime] = useState(new Date());

  // Real time clock
  useEffect(() => {

    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);

  }, []);

  const date = time.toLocaleDateString("en-IN", {
    weekday: "short",
    day: "numeric",
    month: "short"
  });

  const clock = time.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit"
  });

  return (

    <div className="trip-container">

      {/* Header */}

      <div className="trip-header">

        <IoArrowBack
          className="back-icon"
          onClick={() => navigate(-1)}
        />

        <h3>Trip Details</h3>

      </div>


      {/* Trip Card */}

      <div className="trip-card">

        <div className="location-row">
          <div className="dot"></div>
          <input type="text" placeholder="Current location" />
        </div>

        <div className="line"></div>

        <div className="location-row">
          <div className="dot"></div>
          <input type="text" placeholder="Enter destination" />
          <button className="swap">⇅</button>
        </div>


        {/* Real Time Date & Time */}

        <div className="trip-options">

  <div className="option-box">
    <IoCalendarOutline className="option-icon"/>
    <span>{date}</span>
  </div>

  <div className="option-box">
    <IoTimeOutline className="option-icon"/>
    <span>{clock}</span>
  </div>

</div>


        <button className="proceed-btn">
          Proceed
        </button>

      </div>

    </div>

  );

}

export default TripDetailsPage;