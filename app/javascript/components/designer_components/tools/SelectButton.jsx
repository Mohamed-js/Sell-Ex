import React from "react";
import { changeValOf, getValOf } from "../DesignHelpers";

const SelectButton = ({ storeOpts, setStoreOpts, path, value, icon }) => {
  const valueToCompare = getValOf(storeOpts, path);
  return (
    <div className="d-flex flex-column align-items-center">
      <button
        className={`btn border mx-2 ${
          valueToCompare == value && "bg-tertiary white"
        }`}
        onClick={() => {
          changeValOf(storeOpts, setStoreOpts, path, value);
        }}
      >
        {icon.startsWith("fa") ? <i className={icon}></i> : icon.toUpperCase()}
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
