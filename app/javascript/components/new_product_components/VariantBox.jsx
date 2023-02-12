import React, { useState } from "react";

const VariantBox = ({ variant, setVariantsValues }) => {
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
      {variant.type == "color" ? (
        <VariantTextInput
          variant={variant}
          setVariantsValues={setVariantsValues}
        />
      ) : (
        <VariantTextInput
          variant={variant}
          setVariantsValues={setVariantsValues}
        />
      )}
    </div>
  );
};

export default VariantBox;

export const VariantTextInput = ({ variant, setVariantsValues }) => {
  const [val, setVal] = useState(variant.type == "color" ? "black" : null);
  const handleClick = () => {
    setVariantsValues((prev) => {
      if (prev[variant.name]) {
        return {
          ...prev,
          [variant.name]: {
            ...prev[variant.name],
            values: [...prev[variant.name.values], val],
          },
        };
      }
      return { ...prev, [variant.name]: { type: variant.type, values: [val] } };
    });
  };
  return (
    <div className="flex-col">
      <label htmlFor={variant.name + variant.color}>
        Type {variant.name} name
      </label>
      <input
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

export const VariantColorInput = ({ variant, setVariantsValues }) => {
  const [val, setVal] = useState([]);
  const handleClick = () => {
    setVariantsValues((prev) => {
      // [...prev[variant.name], val]
      if (prev[variant.name]) {
        return {
          ...prev,
          [variant.name]: {
            ...prev[variant.name],
            values: [...prev[variant.name.values], val],
          },
        };
      }
      return { ...prev, [variant.name]: { type: variant.type, values: [val] } };
    });
  };
  return (
    <div className="flex-col">
      <label htmlFor={variant.name + variant.color}>
        Type {variant.name} name
      </label>
      <input
        id={variant.name + variant.color}
        type="color"
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
