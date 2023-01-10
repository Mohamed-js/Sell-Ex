import React from "react";
import ColorPicker from "./ColorPicker";

const GeneralDesigner = ({ storeOpts, setStoreOpts }) => {
  return (
    <>
      <br />
      <h2 className="text-left secondary">General</h2>
      {/* BACHGROUND COLOR */}
      <div className="d-flex align-items-center justify-content-between my-2">
        <h6 className="m-0 ml-2">Store Background</h6>
        <ColorPicker
          color={storeOpts.body.bg_color}
          setColor={handleBackgroundColor}
        />
      </div>
      {/* TEXT COLOR */}
      <div className="d-flex align-items-center justify-content-between my-2">
        <h6 className="m-0 ml-2">Main Text Color</h6>
        <ColorPicker color={storeOpts.body.color} setColor={handleColor} />
      </div>
      <hr />
    </>
  );

  function handleBackgroundColor(value) {
    setStoreOpts((prev) => {
      return {
        ...prev,
        body: {
          ...prev.body,
          bg_color: value,
        },
      };
    });
  }

  function handleColor(value) {
    setStoreOpts((prev) => {
      return {
        ...prev,
        body: {
          ...prev.body,
          color: value,
        },
      };
    });
  }
};

export default GeneralDesigner;
