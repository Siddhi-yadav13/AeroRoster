import React from "react";
import "../../styles/heading.css";

function Heading({ title, className = "" }) {
  return (
    <h2 className={`main-heading ${className}`}>{title}</h2>
  );
}

export default Heading;
