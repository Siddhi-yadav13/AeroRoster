import React from "react";
import "../../styles/Card.css";
import "../../styles/stationCard.css";
import { useNavigate } from "react-router-dom";


const BigCard = ({ title, value }) => (
  <div className="big-card">
    <p>{title}:</p>
    <h3>{value}</h3>
  </div>
);

const SmallCard = ({ title1, value1, title2, value2 }) => (
  <div className="small-card">
    <p>{title1}: {value1}</p>
    <p>{title2}: {value2}</p>
  </div>
);


function StationCard({ airport }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/stations/${airport.code}`);
  };

  return (
    <div className="station-card" onClick={handleClick}>
      <div className="airport-code">{airport.code}</div>
      <div className="airport-name">{airport.name}</div>
    </div>
  );
}

export default StationCard;

export { BigCard, SmallCard, StationCard };
