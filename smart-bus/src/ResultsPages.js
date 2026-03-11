import { useLocation, useNavigate } from "react-router-dom";
import "./ResultsPages.css";

function ResultsPage() {
  

  const location = useLocation();
  const navigate = useNavigate();
 

  const from = location.state?.from;
  const to = location.state?.to;
  

  const buses = [
    {
      busNo: "TNSTC 101",
      from: "Kumbakonam",
      to: "Chennai",
      departure: "06:00 AM",
      arrival: "12:00 PM"
    },
    {
      busNo: "SETC 205",
      from: "Chennai",
      to: "Coimbatore",
      departure: "08:00 AM",
      arrival: "04:00 PM"
    },
    {
      busNo: "TNSTC 310",
      from: "Madurai",
      to: "Trichy",
      departure: "07:30 AM",
      arrival: "09:30 AM"
    },
    {
      busNo: "TNSTC 404",
      from: "Kumbakonam",
      to: "Villupuram",
      departure: "09:00 AM",
      arrival: "12:30 PM"
    }
  ];

  const filteredBuses = buses.filter(
    (bus) =>
      bus.from.toLowerCase() === from?.toLowerCase() &&
      bus.to.toLowerCase() === to?.toLowerCase()
  );

  return (

    <div className="results-container">

      <h1 className="results-title">Available Buses</h1>

      <div className="route-info">
        {from} → {to}
      </div>

      {filteredBuses.length === 0 ? (
        <div className="no-bus">No buses found</div>
      ) : (
        filteredBuses.map((bus,index)=>(
          <div className="bus-card" 
          key={index}
          onClick={() => navigate("/track-bus", {state: { bus: bus }})}>

            <div className="bus-number">{bus.busNo}</div>

            <div className="time">
              <span>Departure : {bus.departure}</span>
              <span>Arrival : {bus.arrival}</span>
            </div>

          </div>
        ))
      )}

    </div>

  );
}

export default ResultsPage;