import React, { useState } from "react";

const VariantBtn = ({ variant, funcToDo }) => {
  const [btnSelected, setBtnSelected] = useState(false);
  const handleClick = () => {
    setBtnSelected((prev) => !prev);

    funcToDo(variant);
  };
  return (
    <button
      type="button"
      style={{
        background: btnSelected ? "#171717" : "#f5f5f5",
        color: btnSelected ? "white" : "black",
        padding: "5px 20px",
        margin: "0 5px",
        border: "1px solid #aeaeae",
        borderRadius: "4px",
        boxShadow: !btnSelected ? "1px 3px 6px #6e6e6e" : "none",
      }}
      onClick={handleClick}
    >
      {variant.name}
    </button>
  );
};

export default VariantBtn;
