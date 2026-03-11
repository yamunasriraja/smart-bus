import { useState, useEffect } from "react";
import "./RouteProgress.css";

function RouteProgress({ stops }) {

  const [progress, setProgress] = useState(0);

  useEffect(() => {

    const interval = setInterval(() => {

      setProgress((prev) => {
        if (prev < stops.length - 1) {
          return prev + 0.1;
        }
        return prev;
      });

    }, 500);

    return () => clearInterval(interval);

  }, [stops.length]);

  const currentStop = Math.floor(progress);

  return (

    <div className="tracker-container">

      <div className="route-line">

        {stops.map((stop, index) => (

          <div key={index} className="stop">

            <div
              className={`node ${
                index <= currentStop ? "visited" : ""
              }`}
            />

            <div className="stop-name">
              {stop.name}
            </div>

          </div>

        ))}

        <div
          className="bus"
          style={{
            left: `${(progress/Math.max(stops.length-1,1))*100}%`
          }}
        >
          🚌
        </div>

      </div>

    </div>
  );
}

export default RouteProgress;