import React, { useState, useEffect } from "react";
import randomColor from "randomcolor";
export default function Playground() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState(null);
  useEffect(() => {
    setColor(randomColor());
  }, [count]);
  return (
    <button style={{ background: `10px solid ${color}` }}>
      {count}
      <button onClick={() => setCount(currentCount => currentCount - 1)}>
        -
      </button>
      <button onClick={() => setCount(currentCount => currentCount + 1)}>
        +
      </button>
    </button>
  );
}
