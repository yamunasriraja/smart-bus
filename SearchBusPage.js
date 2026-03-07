import { useState } from "react";
import "./SearchBusPage.css";

function SearchBusPage() {

  const [menuOpen, setMenuOpen] = useState(false);

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

        <input type="text" placeholder="From location" />

        <div className="swap">⇅</div>

        <input type="text" placeholder="To destination" />

        <button className="find-btn">
          Find Bus
        </button>

      </div>

    </div>
  );
}

export default SearchBusPage;