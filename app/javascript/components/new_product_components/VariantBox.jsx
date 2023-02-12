import React, { useState } from "react";

const VariantBox = ({ variant, variantsValues, setVariantsValues }) => {
  const vals = variantsValues[variant.name];
  return (
    <div
      className="border rounded p-3 m-1"
      style={{
        border: "1px solid lightgrey",
        borderRadius: "4px",
      }}
    >
      <div>
        {variant.name[0].toUpperCase()}
        {variant.name.slice(1)}s
      </div>
      <div className="flex-row">
        {vals &&
          vals.values.map((val) => (
            <VariantValue val={val} variant={variant} />
          ))}
      </div>

      <VariantInput variant={variant} setVariantsValues={setVariantsValues} />
    </div>
  );
};

export default VariantBox;

export const VariantInput = ({ variant, setVariantsValues }) => {
  const [val, setVal] = useState(variant.type == "color" ? "black" : "");
  const handleClick = () => {
    setVariantsValues((prev) => {
      console.log(prev[variant.name]);
      if (prev[variant.name]) {
        const x = {
          color: {
            type: "color",
            values: [1],
          },
        };
        return {
          ...prev,
          [variant.name]: {
            ...prev[variant.name],
            values: [...prev[variant.name]["values"], val],
          },
        };
      }
      return { ...prev, [variant.name]: { type: variant.type, values: [val] } };
    });
    setVal(variant.type == "color" ? "black" : "");
  };
  return (
    <div className="flex-col">
      <label htmlFor={variant.name + variant.color}>
        Type {variant.name} name
      </label>
      <input
        value={val}
        id={variant.name + variant.color}
        type={variant.type}
        onChange={(e) => setVal(e.target.value)}
      />
      <button
        type="button"
        className="btn bg-primary white mt-2"
        style={{
          width: 100,
        }}
        onClick={handleClick}
      >
        Add
      </button>
    </div>
  );
};

export const VariantValue = ({ variant, val }) => {
  return variant.type == "color" ? (
    <div
      style={{
        width: 50,
        height: 50,
        borderRadius: "50%",
        backgroundColor: val,
        margin: ".25rem",
      }}
    ></div>
  ) : (
    <div className="rounded p-2 m-1 border">{val}</div>
  );
};
