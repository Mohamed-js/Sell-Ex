import React from "react";

const BooleanButton = ({ text, valueToCompare, handleClick }) => {
  return (
    <div className="d-flex align-items-center justify-content-between my-2">
      <p className="m-0 ml-2">Display {text}</p>
      <span
        className={`mx-3 ${valueToCompare && "tertiary"}`}
        onClick={() => handleClick()}
      >
        <i
          className={`${
            valueToCompare ? "fa fa-check-square" : "fa fa-square"
          }`}
        ></i>
      </span>
    </div>
  );
};

export default BooleanButton;
