import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";
import "./ResultsPages.css";

function ResultsPages() {

  const location = useLocation();

  const from = location.state?.from;
  const to = location.state?.to;

  const [dateTime, setDateTime] = useState(new Date());
  const [buses, setBuses] = useState([]);

  // Date & Time updater
  useEffect(() => {

    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer);

  }, []);

  // Fetch buses from Firebase
  useEffect(() => {

    const fetchBuses = async () => {

      try {

        const querySnapshot = await getDocs(collection(db, "buses"));

        const busList = querySnapshot.docs.map(doc => doc.data());

        setBuses(busList);

      } catch (error) {

        console.error("Error fetching buses:", error);

      }

    };

    fetchBuses();

  }, []);

  const date = dateTime.toLocaleDateString();
  const time = dateTime.toLocaleTimeString();

  const filteredBuses = buses.filter(
    (bus) =>
      bus.from?.toLowerCase() === from?.toLowerCase() &&
      bus.to?.toLowerCase() === to?.toLowerCase()
  );

  return (

    <div className="results-container">

      <div className="date-time-box">
        <span>{date}</span>
        <span>{time}</span>
      </div>

      <h1 className="results-title">
        Available Buses ({filteredBuses.length})
      </h1>

      <div className="route-info">
        {from} → {to}
      </div>

      {filteredBuses.length === 0 ? (
        <div className="no-bus">No buses found</div>
      ) : (
        filteredBuses.map((bus, index) => (
          <div className="bus-card" key={index}>

            <div className="bus-number">{bus.BUSNO}</div>

            <div className="time">
              <span>Departure : {bus.departure}</span>
              <span>Arrival : {bus.arrival}</span>
            </div>

            <div className="duration">
              Distance : {bus.distance} | Travel Time : {bus.duration}
            </div>

          </div>
        ))
      )}

    </div>

  );
}

export default ResultsPages;   