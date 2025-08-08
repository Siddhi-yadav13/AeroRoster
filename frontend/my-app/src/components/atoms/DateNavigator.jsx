import React from 'react';
import "../../styles/DataNavigator.css";

const DateNavigator = ({ selectedDate, onChange }) => {
  const handlePrev = () => {
    onChange(new Date(selectedDate.setDate(selectedDate.getDate() - 1)));
  };

  const handleNext = () => {
    onChange(new Date(selectedDate.setDate(selectedDate.getDate() + 1)));
  };

  return (
    <div className="date-navigator">
      <button onClick={handlePrev}>◀</button>
      <input
        type="date"
        value={selectedDate.toISOString().split('T')[0]}
        onChange={(e) => onChange(new Date(e.target.value))}
      />
      <button onClick={handleNext}>▶</button>
    </div>
  );
};

export default DateNavigator;
