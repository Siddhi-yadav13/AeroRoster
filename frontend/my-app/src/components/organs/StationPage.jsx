import React from "react";
import {StationCard} from "../molecules/Card";
import airports from "../../data/station.json";
import Heading from "../atoms/Heading";
import "../../styles/stationCard.css";

function StationPage() {
  return (
    <div className="stationpage-container">
      <Heading title="Stations" className="station-heading" />
      <div className="station-container">
        {airports.map((airport, index) => (
          <StationCard key={index} airport={airport} />
        ))}
      </div>
    </div>
  );
}

export default StationPage;
