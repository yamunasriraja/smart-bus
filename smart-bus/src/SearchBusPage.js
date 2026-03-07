import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SearchBusPage.css";

function SearchBusPage() {

  const [menuOpen, setMenuOpen] = useState(false);

  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  const navigate = useNavigate();

  const handleFindBus = () => {

    if(!from || !to){
      alert("Please enter both locations");
      return;
    }

    navigate("/results", {
      state: { from, to }
    });

  };

  return (
    <div className="container">

      {/* Navbar */}
      <nav className="navbar">

        <div 
          className="menu"
          onClick={() => setMenuOpen(true)}
        >
          ☰
        </div>

        <div className="logo">TransitGo</div>

      </nav>

      {/* SIDE MENU */}

      <div className={`side-menu ${menuOpen ? "active" : ""}`}>

        <div 
          className="close-btn"
          onClick={() => setMenuOpen(false)}
        >
          ✕
        </div>

        <ul>

          <li>👤 My Details</li>

          <li>
            📜 Search History
            <br/>
            <button className="clear-btn">
              Clear History
            </button>
          </li>

          <li>⚠ Report Issue</li>

          <li>💡 Suggestions & Features</li>

        </ul>

      </div>

      {/* Overlay */}

      {menuOpen && (
        <div 
          className="overlay"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}

      {/* Heading */}

      <div className="title">
        <h1>Discover Your Route</h1>
        <p>Fast. Simple. Reliable bus travel</p>
      </div>

      {/* Search Box */}

      <div className="search-card">

        <input type="text"
         placeholder="From location" 
         value={from}
         onChange={(e) => setFrom(e.target.value)}
         />

        <div className="swap">⇅</div>

        <input type="text"
         placeholder="To destination" 
         value={to}
         onChange={(e) => setTo(e.target.value)}
         />

        <button className="find-btn" onClick={handleFindBus}>
          Find Bus
        </button>

      </div>

    </div>
  );
}

export default SearchBusPage;