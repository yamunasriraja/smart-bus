// TripDetailsPage.js
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./TripDetailsPage.css";

function TripDetailsPage() {
  const navigate = useNavigate();
  const [currentLocation, setCurrentLocation] = useState("Locating...");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const [time, setTime] = useState(new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}));

  const [recentTrips, setRecentTrips] = useState([
    { from: "Kumbakonam", to: "Mayiladuthurai" },
  ]);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => setCurrentLocation(`Lat:${pos.coords.latitude.toFixed(2)}, Lon:${pos.coords.longitude.toFixed(2)}`),
        () => setCurrentLocation("Location denied")
      );
    }
  }, []);

  const handleProceed = () => {
    if (!destination) return alert("Enter destination");
    navigate("/results"); // you can pass state if needed
  };

  return (
    <div className="trip-container">
      <h2>Trip Details</h2>

      <div className="trip-card">
        <div className="trip-inputs">
          <input type="text" value={currentLocation} readOnly />
          <input type="text" placeholder="Enter destination" value={destination} onChange={e => setDestination(e.target.value)} />
        </div>

        <div className="trip-datetime">
          <input type="date" value={date} onChange={e => setDate(e.target.value)} />
          <input type="time" value={time} onChange={e => setTime(e.target.value)} />
        </div>

        <button className="proceed-btn" onClick={handleProceed}>Proceed</button>
      </div>

      <h3>Recent Trips</h3>
      {recentTrips.map((trip, i) => (
        <div key={i} className="recent-trip-card">
          <b>From {trip.from}</b>
          <p>To {trip.to}</p>
        </div>
      ))}
    </div>
  );
}

export default TripDetailsPage;