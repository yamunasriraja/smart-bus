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

function AuthPage() {

  const navigate = useNavigate();

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  // Email Login
  const handleLogin = async () => {

    if(!email || !password){
      alert("Please enter email and password");
      return;
    }

    try{

      // existing user login
      await signInWithEmailAndPassword(auth,email,password);

    }catch(error){

      // new user create
      await createUserWithEmailAndPassword(auth,email,password);

    }

    const allowLocation = window.confirm(
      "Enable location for live bus tracking?"
    );

    if(allowLocation){
      navigator.geolocation.getCurrentPosition(()=>{
        navigate("/search");
      });
    }else{
      navigate("/search");
    }

  };

  // Google Login
const handleGoogleLogin = async () => {

  const provider = new GoogleAuthProvider();

  try{

    await signInWithPopup(auth,provider);

    const allowLocation = window.confirm(
      "Enable location for live bus tracking?"
    );

    if(allowLocation){

      navigator.geolocation.getCurrentPosition(

        (position)=>{

          const lat = position.coords.latitude;
          const lon = position.coords.longitude;

          console.log("User Location:",lat,lon);

          navigate("/search");

        },

        (error)=>{
          alert("Location access denied");
          navigate("/search");
        }

      );

    }else{
      alert("Geolocation is not supported in this")

      navigate("/search");

    }

  }catch(error){

    console.error("Google login error:",error);
    alert("Google login failed");

  }

};
  return(

    <div className="auth-wrapper">

      <div className="auth-box">

        <h2>Welcome Back</h2>
        <p className="subtitle">Login to continue</p>

        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />

        <button className="login-btn" onClick={handleLogin}>
          Login
        </button>

        <div className="divider">
          <span>OR</span>
        </div>

        <button className="google-btn" onClick={handleGoogleLogin}>
          <img
            src="https://developers.google.com/identity/images/g-logo.png"
            alt="google"
          />
          Continue with Google
        </button>

        <p className="signup-text">
          Don't have an account? 
          <span onClick={() => navigate("/signup")} className="signup-link">
 Sign up
</span>
        </p>

      </div>

    </div>

  );
}

export default AuthPage; 