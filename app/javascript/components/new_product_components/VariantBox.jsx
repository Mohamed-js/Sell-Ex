import React, { useState } from "react";

const VariantBox = ({
  variant,
  variantsValues,
  setVariantsValues,
  deleteVariantValue,
}) => {
  const vals = variantsValues[variant.name];
  return (
    <div
      className="border rounded p-3 m-1 my-3"
      style={{
        border: "1px solid lightgrey",
        borderRadius: "4px",
      }}
    >
      <div>
        Enter product's {variant.name[0].toUpperCase()}
        {variant.name.slice(1)}s
      </div>
      <div className="flex-row" style={{ flexWrap: "wrap" }}>
        {vals &&
          vals.values.map((val) => (
            <VariantValue
              val={val}
              variant={variant}
              deleteVariantValue={deleteVariantValue}
            />
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
      <label htmlFor={variant.name + variant.type}>
        {variant.type == "color"
          ? "Select a color then press add"
          : `Type ${variant.name} name. `}
        {variant.type != "color" && <small>eg.(sm, m, xl, 40cm, etc...)</small>}
      </label>
      <input
        className={variant.type == "color" ? "color-btn" : "form-control"}
        value={val}
        id={variant.name + variant.type}
        type={variant.type}
        onChange={(e) => setVal(e.target.value)}
        placeholder={variant.name}
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

export const VariantValue = ({ variant, val, deleteVariantValue }) => {
  return variant.type == "color" ? (
    <button
      style={{
        width: 50,
        height: 50,
        borderRadius: "50%",
        backgroundColor: val,
        margin: ".25rem",
        border: "none",
        boxShadow: "#b7b4b4 1px 2px 5px",
      }}
      onClick={() => deleteVariantValue(variant.name, val)}
    ></button>
  ) : (
    <button
      style={{
        width: 80,
        height: 35,
        borderRadius: "50%",
        backgroundColor: val,
        border: "none",
        boxShadow: "#b7b4b4 1px 2px 5px",
      }}
      className="rounded m-1"
      onClick={() => deleteVariantValue(variant.name, val)}
    >
      {val}
    </button>
  );
};
