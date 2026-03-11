import "./SearchBusPage.css";

function SearchBusPage(){

  return(

    <div className="home-container">

      {/* Header */}

      <div className="top-bar">

        <div className="profile">
          👤 CHALO
        </div>

        <div className="location">
          📍 Chennai Sec
        </div>

      </div>

      {/* Search */}

      <div className="search-box">
        🔍 Find and track your bus
      </div>

      {/* Nearest Stop */}

      <div className="section">

        <div className="section-header">

          <h3>Nearest bus stop</h3>

          <span className="link">See all stops</span>

        </div>

        <div className="stop-card">

          <div className="stop-title">
            📍 Kumbakonam
          </div>

          <div className="distance">
            1.2 km away
          </div>

          <hr/>

          <div className="bus-row">

            <div>
              <b>340K</b>
              <p>To Chennai KCBT</p>
            </div>

            <div className="time">
              11:48 AM
            </div>

          </div>

          <div className="bus-row">

            <div>
              <b>307</b>
              <p>To Chennai CMBT</p>
            </div>

            <div className="time">
              01:15 PM
            </div>

          </div>

        </div>

        <div className="link see-buses">
          See all buses
        </div>

      </div>

      {/* Map */}

      <div className="section">

        <h3>Buses around you</h3>

        <div className="map-box">

          Map will appear here

        </div>

      </div>

    </div>

  )

}

export default SearchBusPage;  