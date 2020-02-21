import React, { useState, useEffect } from "react";
import Name from "./Name";
import ColorPicker from "./ColorPicker";
import randomColor from "randomcolor";

export default function Paint() {
  const [colors, setActiveColor] = useState([]);
  const [colorsactive, setcolorsactive] = useState("");
  const getcolor = () => {
    const baseColor = randomColor().slice(1);
    fetch(`https://www.thecolorapi.com/scheme?hex=${baseColor}&mode=monochrome`)
      .then(res => res.json())
      .then(res => {
        let rescolor = res.colors.map(color => color.hex.value);
        setActiveColor(rescolor);
        setcolorsactive(res.colors[0].hex.value);
      });
  };
  useEffect(() => {
    getcolor();
  }, []);

  return (
    <header style={{ borderTop: `10px solid ${colorsactive}` }}>
      <div className="app">
        <Name />
      </div>
      <div style={{ marginTop: 10 }}>
        <ColorPicker
          colors={colors}
          activeColor={colorsactive}
          setcolorsactive={setcolorsactive}
        />
      </div>
    </header>
  );
}
