import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "./firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import "./SignupPage.css";
import LocationPopup from "./LocationPopup"; // same popup

function SignupPage() {
  const navigate = useNavigate();
  const [showLocationPopup, setShowLocationPopup] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    if (!email || !password) return alert("Enter email and password");

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setShowLocationPopup(true); // show popup
    } catch (error) {
      alert(error.message);
    }
  };

  // Location handlers
  const allowLocation = () => {
    setShowLocationPopup(false);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          console.log("User Location:", pos.coords.latitude, pos.coords.longitude);
          navigate("/search");
        },
        () => navigate("/search")
      );
    } else {
      navigate("/search");
    }
  };

  const skipLocation = () => {
    setShowLocationPopup(false);
    navigate("/search");
  };

  return (
    <div className="signup-wrapper">
      <div className="signup-box">
        {showLocationPopup && <LocationPopup onAllow={allowLocation} onSkip={skipLocation} />}

        <h2>Create Account</h2>
        <p className="subtitle">Sign up to continue</p>

        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="signup-btn" onClick={handleSignup}>
          Create Account
        </button>

        <p className="login-text">
          Already have an account? <span onClick={() => navigate("/")}>Login</span>
        </p>
      </div>
    </div>
  );
}

export default SignupPage;