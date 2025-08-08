import React, { useState } from "react";
import StationCard from "../molecules/Card";
import airports from "../../data/station.json";
import Heading from "../atoms/Heading";
import "../../styles/stationCard.css";

const regions = ["North", "South", "East", "West"];

function StationPage() {
  const [selectedRegion, setSelectedRegion] = useState("North");

  const filteredAirports = airports.filter(
    (airport) => airport.region === selectedRegion
  );

  return (
    <div className="stationpage-container">
      <Heading title="Stations" className="station-heading" />

      <div className="region-tabs">
        {regions.map((region) => (
          <button
            key={region}
            className={`region-tab ${selectedRegion === region ? "active" : ""}`}
            onClick={() => setSelectedRegion(region)}
          >
            {region}
          </button>
        ))}
      </div>

      <div className="station-container">
        {filteredAirports.map((airport, index) => (
          <StationCard key={index} airport={airport} />
        ))}
      </div>
    </div>
  );
}

export default StationPage;
