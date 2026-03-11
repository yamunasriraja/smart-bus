// SearchBusPage.js
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import "./SearchBusPage.css";

function SearchBusPage() {
  const navigate = useNavigate();
  const [userLocation, setUserLocation] = useState("Locating...");
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  // Get user's location
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const { latitude, longitude } = pos.coords;
          setUserLocation(`Lat:${latitude.toFixed(2)}, Lon:${longitude.toFixed(2)}`);
        },
        () => {
          setUserLocation("Location denied");
        }
      );
    }
  }, []);

  const handleProfileClick = () => setShowProfileMenu(!showProfileMenu);
  const goToTripDetails = () => navigate("/trip-details");

  return (
    <div className="home-container">
      {/* Header */}
      <div className="top-bar">
        <div className="profile" onClick={handleProfileClick}>
          <FaUserCircle size={22} /> Profile
        </div>
        <div className="location">
          <MdLocationOn /> {userLocation}
        </div>
      </div>

      {/* Profile Menu */}
      {showProfileMenu && (
        <div className="profile-menu">
          <p>My Profile</p>
          <p>My Bookings</p>
          <p>Settings</p>
          <p>Logout</p>
        </div>
      )}

      {/* Search Box */}
      <div className="search-box" onClick={goToTripDetails}>
        <IoSearch className="icon" /> Find and track your bus
      </div>

      {/* Recent Trips */}
      <div className="recent-trips">
        <div className="trip-card">
          <b>From Kumbakonam</b>
          <p>To Mayiladuthurai</p>
        </div>
      </div>
    </div>
  );
}

export default SearchBusPage;