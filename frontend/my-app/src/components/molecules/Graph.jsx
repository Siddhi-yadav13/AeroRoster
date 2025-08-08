import React from "react";
import "../../styles/Graph.css";
import graphImage from "../../assets/image 4.png"; // Replace with your actual image path

const Graph = ({ title }) => {
  return (
    <div className="graph-container">
      <h3 className="graph-title">{title}</h3>
      <img src={graphImage} alt={`${title} Graph`} className="graph-image" />
    </div>
  );
};

export default Graph;
