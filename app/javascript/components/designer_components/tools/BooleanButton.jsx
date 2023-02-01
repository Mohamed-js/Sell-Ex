import React from "react";
import { changeValOf, getValOf } from "../DesignHelpers";

const BooleanButton = ({ storeOpts, setStoreOpts, text, path }) => {
  const valueToCompare = getValOf(storeOpts, path);
  return (
    <div className="d-flex align-items-center justify-content-between my-2">
      <p className="m-0 ml-2">Display {text}</p>
      <span
        className={`mx-3 ${valueToCompare && "tertiary"}`}
        onClick={() =>
          changeValOf(storeOpts, setStoreOpts, path, !valueToCompare)
        }
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
