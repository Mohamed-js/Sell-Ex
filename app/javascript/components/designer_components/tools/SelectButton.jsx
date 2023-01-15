import React from "react";

const SelectButton = ({ valueToCompare, value, handleClick, icon }) => {
  return (
    <div className="d-flex flex-column align-items-center">
      <button
        className={`btn border mx-2 ${
          valueToCompare == value && "bg-tertiary white"
        }`}
        onClick={() => handleClick(value)}
      >
        <i className={icon}></i>
      </button>
      <small
        style={{
          fontSize: 10,
          fontWeight: 500,
          marginTop: 2,
        }}
      >
        {value.toUpperCase()}
      </small>
    </div>
  );
};

export default SelectButton;
