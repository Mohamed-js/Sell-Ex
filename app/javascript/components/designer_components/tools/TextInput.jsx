import React from "react";
import { changeValOf, getValOf } from "../DesignHelpers";

const TextInput = ({ storeOpts, setStoreOpts, text, path }) => {
  const defaultValue = getValOf(storeOpts, path);
  return (
    <div className="d-flex align-items-center justify-content-between my-2">
      <p className="m-0 ml-2">{text}</p>
      <input
        className="mx-3 p-2 rounded border"
        type="text"
        defaultValue={defaultValue}
        onChange={(e) =>
          changeValOf(storeOpts, setStoreOpts, path, e.target.value)
        }
      />
    </div>
  );
};

export default TextInput;
