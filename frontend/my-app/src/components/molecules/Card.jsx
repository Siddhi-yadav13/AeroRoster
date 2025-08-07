import React from "react";
import "../../styles/bigCard.css";
import "../../styles/stationCard.css";

function BigCard() {
  return (
    <div className="big-card">
    </div>
  );
}

function StationCard({ airport }) {
  return (
    <div className="station-card">
      <div className="airport-code">{airport.code}</div>
      <div className="airport-name">{airport.name}</div>
    </div>
  );
}

export default BigCard;
export { StationCard };