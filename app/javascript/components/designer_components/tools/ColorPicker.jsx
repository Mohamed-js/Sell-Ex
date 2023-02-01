import React from "react";
import { changeValOf, getValOf } from "../DesignHelpers";

const ColorPicker = ({
  storeOpts,
  setStoreOpts,
  path,
  text,
  withTransparency = false,
}) => {
  const color = getValOf(storeOpts, path);
  const name = `${text.split(" ").join("_")}_${Math.random()}`;
  return (
    <div className="d-flex align-items-center justify-content-between my-2">
      <p className="m-0 ml-2">{text}</p>
      <div className="d-flex align-items-center px-3">
        {withTransparency && (
          <button
            className="btn primary"
            onClick={(e) => {
              changeValOf(storeOpts, setStoreOpts, path, "transparent");
            }}
          >
            Make Transparent
          </button>
        )}
        <label
          htmlFor={name}
          style={{
            width: 25,
            height: 25,
            backgroundColor: color,
            margin: "0 10px",
            border: "1px solid lightgrey",
            borderRadius: "5px",
          }}
        ></label>
        <input
          id={name}
          className="color-picker position-relative"
          type="color"
          defaultValue={color}
          onChange={(e) => {
            changeValOf(storeOpts, setStoreOpts, path, e.target.value);
          }}
        />
      </div>
    </div>
  );
};

export default ColorPicker;
