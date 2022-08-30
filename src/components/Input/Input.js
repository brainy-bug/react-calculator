// Import react and reactDOM libaries
import React from "react";

// Import styles
import "./Input.css";

// Read a react component

const Input = ({inputValue}) => {
  return (
    <div className="input-wrapper">
      <div className="input-text">{inputValue}</div>
    </div>
  );
};

export default Input;
