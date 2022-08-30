// Import react and reactDOM libaries
import React from "react";

// Import styles
import "./Buttons.css";

// Read a react component

const Buttons = ({ values, handleClick, handleEqual, onClear }) => {
  const isOperator = (v) => {
    return !isNaN(v) || v === "." || v === "AC" || v === "C" || v === "%";
  };

  const isAtTop = (v) => {
    return v === "AC" || v === "C" || v === "%";
  };

  const onBtnClick = (val) => {
    val === "X" ? handleClick("*") : handleClick(val);
    if (val === "=") {
      handleClick("");
      handleEqual();
    }
    if (val === "C" || val === "AC") onClear(val);
  };

  const renderedButtons = values.map((val) => {
    return (
      <div
        key={val}
        className={`btn 
          ${isOperator(val) ? "" : "rounded operator"} 
          ${val === "=" ? "rounded equal" : ""}
          ${isAtTop(val) ? "rounded top-btn" : ""}
      `}
        onClick={() => onBtnClick(val)}
      >
        {val}
      </div>
    );
  });

  return <div className="row">{renderedButtons}</div>;
};

export default Buttons;
