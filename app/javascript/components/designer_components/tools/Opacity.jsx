function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

// function hexToRGB(hex, alpha) {
//     var r = parseInt(hex.slice(1, 3), 16),
//         g = parseInt(hex.slice(3, 5), 16),
//         b = parseInt(hex.slice(5, 7), 16);

//     if (alpha) {
//         return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
//     } else {
//         return "rgb(" + r + ", " + g + ", " + b + ")";
//     }
// }

import React from "react";
import { changeValOf, getValOf } from "../DesignHelpers";

const Opacity = ({ storeOpts, setStoreOpts, path, text }) => {
  let color = getValOf(storeOpts, path);

  let rgbArray = color.split("(")[1].split(",").slice(0, 3);

  let aValue = color.split("(")[1].split(",").slice(-1)[0].split(")")[0];

  const name = `${text.split(" ").join("_")}_${Math.random()}`;
  return (
    <div className="d-flex align-items-center justify-content-between my-2">
      <p className="m-0 ml-2">{text}</p>
      <div className="d-flex align-items-center px-3">
        <label
          htmlFor={name}
          style={{
            width: 25,
            height: 25,
            backgroundColor: color,
            margin: "0 10px",
            border: "1px solid lightgrey",
            borderRadius: "5px",
          }}
        ></label>
        <input
          id={name}
          className="color-picker position-relative"
          type="color"
          defaultValue={color}
          onChange={(e) => {
            const rgb = hexToRgb(e.target.value);
            rgbArray[0] = rgb.r;
            rgbArray[1] = rgb.g;
            rgbArray[2] = rgb.b;
            changeValOf(
              storeOpts,
              setStoreOpts,
              path,
              `rgba(${Number(rgbArray[0])}, ${Number(rgbArray[1])}, ${Number(
                rgbArray[2]
              )}, ${Number(aValue)})`
            );
            console.log(e.target.value);
          }}
        />
        <input
          type="range"
          name="transparency"
          id="transparency"
          min="0"
          max="1"
          step="0.1"
          onInput={(e) => {
            aValue = e.target.value;
            changeValOf(
              storeOpts,
              setStoreOpts,
              path,
              `rgba(${Number(rgbArray[0])}, ${Number(rgbArray[1])}, ${Number(
                rgbArray[2]
              )}, ${Number(aValue)})`
            );
          }}
        />
      </div>
    </div>
  );
};

export default Opacity;
