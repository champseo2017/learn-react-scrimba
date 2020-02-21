import React, { useState, useEffect } from "react";
import randomColor from "randomcolor";
export default function ColorPicker({
  colors = [],
  activeColor,
  setcolorsactive
}) {
  if (!colors.length) return null;
  return (
    <fieldset className="color-picker">
      {colors.map((color, i) => (
        <label key={i}>
          <input
            name="color"
            type="radio"
            value={color}
            checked={activeColor === color}
            onChange={() => setcolorsactive(color)}
          />
          <span style={{background: color}}></span>
        </label>
      ))}
    </fieldset>
  );
}
