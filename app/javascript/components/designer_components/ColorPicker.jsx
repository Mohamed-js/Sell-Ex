import React from "react";

const ColorPicker = ({ color, setColor }) => {
  return (
    <div className="d-flex align-items-center px-3">
      <div
        style={{
          width: 25,
          height: 25,
          backgroundColor: `${color}`,
          margin: "0 10px",
          border: "1px solid white",
        }}
      ></div>
      <input
        className="color-picker position-relative"
        type="color"
        defaultValue={color}
        onChange={(e) => {
          setColor(e.target.value);
        }}
      />
    </div>
  );
};

export default ColorPicker;
