import React from "react";
import ColorPicker from "./tools/ColorPicker";

const GeneralDesigner = ({ storeOpts, setStoreOpts }) => {
  return (
    <>
      <br />
      <h2 className="text-left mb-3">General</h2>
      {/* BACHGROUND COLOR */}
      <ColorPicker
        text="Store Background"
        storeOpts={storeOpts}
        setStoreOpts={setStoreOpts}
        path="body.bg_color"
      />

      {/* TEXT COLOR */}

      <ColorPicker
        text="Main text color"
        storeOpts={storeOpts}
        setStoreOpts={setStoreOpts}
        path="body.color"
      />

      <hr />
    </>
  );
};

export default GeneralDesigner;
