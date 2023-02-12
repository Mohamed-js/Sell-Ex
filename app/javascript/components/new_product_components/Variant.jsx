import React from "react";

const VariantBtn = ({ variant }) => {
  return (
    <div
      style={{
        background: "lightgrey",
        padding: "5px 20px",
        margin: "0 5px",
        border: "1px solid #aeaeae",
        borderRadius: "4px",
      }}
    >
      {variant.name}
    </div>
  );
};

export default VariantBtn;
