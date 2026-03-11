import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AuthPage.css";
import { auth } from "./firebase";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword
} from "firebase/auth";
import LocationPopup from "./LocationPopup"; // import the reusable popup

function AuthPage() {
  const navigate = useNavigate();
  const [showLocationPopup, setShowLocationPopup] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (!email || !password) return alert("Please enter email and password");

    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch {
      await createUserWithEmailAndPassword(auth, email, password);
    }

    setShowLocationPopup(true); // show popup
  };

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      setShowLocationPopup(true); // show popup
    } catch (error) {
      console.error("Google login error:", error);
      alert("Google login failed");
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
    <div className="auth-wrapper">
      <div className="auth-box">
        {showLocationPopup && <LocationPopup onAllow={allowLocation} onSkip={skipLocation} />}

        <h2>Welcome Back</h2>
        <p className="subtitle">Login to continue</p>

        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="login-btn" onClick={handleLogin}>
          Login
        </button>

        <div className="divider">
          <span>OR</span>
        </div>

        <button className="google-btn" onClick={handleGoogleLogin}>
          <img src="https://developers.google.com/identity/images/g-logo.png" alt="google" />
          Continue with Google
        </button>

        <p className="signup-text">
          Don't have an account? <span onClick={() => navigate("/signup")}>Sign up</span>
        </p>
      </div>
    </div>
  );
}

export default AuthPage;