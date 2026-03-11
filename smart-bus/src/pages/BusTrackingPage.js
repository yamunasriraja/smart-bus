import { useLocation } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup, Polyline, useMap } from "react-leaflet";
import { useState, useEffect } from "react";
import "./BusTrackingPage.css";
import L from "leaflet";
import RouteProgress from "../components/RouteProgress";

function RecenterMap({ position }) {
  const map = useMap();

  useEffect(()=>{
    map.flyTo(position, 10,{
      duration:1.5
    });
  },[position, map]);

  return null;
}

function BusTrackingPage(){

  const location = useLocation();
  const bus = location.state?.bus;

  const [showMap,setShowMap] = useState(false);

  const busIcon = new L.Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/3448/3448339.png",
    iconSize: [40, 40],
  });

  const stopIcon = new L.Icon({
    iconUrl:"https://cdn-icons-png.flaticon.com/512/684/684908.png",
    iconSize:[25,25]
  });

  const source = [10.9601,79.3845];
  const destination = [13.0827,80.2707];

  const route = [
    [10.9601,79.3845],
    [11.5,79.8],
    [12.2,80.0],
    [13.0827,80.2707]
  ];

  const stops = [
    {name:"Kumbakonam", coords:[10.9601,79.3845]},
    {name:"Tindivanam", coords:[12.23,79.65]},
    {name:"Chengalpattu", coords:[12.69,79.98]},
    {name:"Chennai", coords:[13.0827,80.2707]}
  ];

  const [position,setPosition] = useState(source);
  const [routeIndex,setRouteIndex] = useState(0);
  const [passengers,setPassengers] = useState(18);

  const nextStop = stops[routeIndex + 1];

  useEffect(()=>{

    const moveBus = setInterval(()=>{

      setRouteIndex(prev => {

        const next = prev + 1;

        if(next < route.length){
          setPosition(route[next]);
          return next;
        }

        return prev;

      });

    },4000);

    return ()=>clearInterval(moveBus);

  },[]);

  const getCrowdLevel = () =>{
    if(passengers <= 15) return {text:"Low", class:"low"};
    if(passengers <= 30) return {text:"Medium", class:"medium"};
    return {text:"High", class:"high"};
  };

  const crowd = getCrowdLevel();

  const completedRoute = route.slice(0, routeIndex + 1);
  const remainingRoute = route.slice(routeIndex);

  return(

    <div className="tracking-container">

      <div className="tracking-card">

        <div className="bus-title">{bus?.busNo}</div>

        <div className="route">
          {bus?.from} → {bus?.to}
        </div>

        <div className="details">
          <span>Departure: {bus?.departure}</span>
          <span>Arrival: {bus?.arrival}</span>
        </div>

        {/* ROUTE TRACKER */}
        <RouteProgress stops={stops} />

        {/* MAP BUTTON */}
        <button
          className="map-toggle"
          onClick={()=>setShowMap(!showMap)}
        >
          {showMap ? "Hide Map" : "View Live Map"}
        </button>

        {showMap && (

        <div className="map-container">

          <MapContainer
            center={source}
            zoom={9}
            scrollWheelZoom={false}
            style={{height:"100%",width:"100%"}}
          >

            <RecenterMap position={position} />

            <TileLayer
              attribution="OpenStreetMap"
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Polyline
              positions={completedRoute}
              color="green"
              weight={6}
            />

            <Polyline
              positions={remainingRoute}
              color="#ccc"
              weight={6}
            />

            <Marker position={position} icon={busIcon}>
              <Popup>{bus?.busNo} Live Location</Popup>
            </Marker>

            {stops.map((stop,index)=>{

              let icon = stopIcon;

              if(index === routeIndex + 1){
                icon = new L.Icon({
                  iconUrl:"https://cdn-icons-png.flaticon.com/512/854/854878.png",
                  iconSize:[35,35]
                });
              }

              return (
                <Marker key={index} position={stop.coords} icon={icon}>
                  <Popup>{stop.name}</Popup>
                </Marker>
              );
            })}

          </MapContainer>

        </div>

        )}

        <div className="next-stop">
          Next Stop: {nextStop ? nextStop.name : "Destination"}
        </div>

        <div className="status-bar">

          <div className="status-box">
            <div className="status-title">Passengers</div>
            <div className="status-value">{passengers}</div>
          </div>

          <div className="status-box">
            <div className="status-title">Crowd Level</div>
            <div className={`status-value ${crowd.class}`}>
              {crowd.text}
            </div>
          </div>

          <div className="status-box">
            <div className="status-title">Status</div>
            <div className="status-value">Running</div>
          </div>

        </div>

      </div>

    </div>
  );
}

export default BusTrackingPage;