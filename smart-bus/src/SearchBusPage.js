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

//location

useEffect(() => {

  navigator.geolocation.getCurrentPosition(async (pos) => {

    const latitude = pos.coords.latitude;
    const longitude = pos.coords.longitude;

    try {

      const res = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyAM3oTE_RuJhpKGaDk1Kg2iq401mOAqsu8`
      );

      const data = await res.json();

      console.log(data);

      if (data.results && data.results.length > 0) {

      const components = data.results[0].address_components;

const cityObj = components.find(comp =>
  comp.types.includes("locality") ||
  comp.types.includes("administrative_area_level_2")
);

if (cityObj) {
  setUserLocation(cityObj.long_name);
} else {
  setUserLocation(data.results[0].formatted_address);
}  

      } else {

        setUserLocation("Location unavailable");

      }

    } catch (err) {

      console.log(err);
      setUserLocation("Location error");

    }

  },
  () => {
    setUserLocation("Location denied");
  });

}, []);






  const handleProfileClick = () => setShowProfileMenu(!showProfileMenu);
  const goToTripDetails = () => navigate("/trip");

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