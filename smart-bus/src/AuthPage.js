import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AuthPage.css";

function AuthPage() {

  const navigate = useNavigate();

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const handleLogin = () => {

    if(!email || !password){
      alert("Please enter email and password");
      return;
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

  const handleGoogle = () =>{
    alert("Google login will connect later");
  }

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

        <button className="google-btn" onClick={handleGoogle}>
          <img
            src="https://developers.google.com/identity/images/g-logo.png"
            alt="google"
          />
          Continue with Google
        </button>

        <p className="signup-text">
          Don't have an account? <span>Sign up</span>
        </p>

      </div>

    </div>

  );
}

export default AuthPage;