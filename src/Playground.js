import React, { useState, useEffect, useRef } from "react";
import randomColor from "randomcolor";
export default function Playground() {
  const [count, setCount] = useState(30);
  const inputRef = useRef(null)
  const [color, setColor] = useState(null);

  useEffect(() => {
    setColor(randomColor());
    let [elminputfocus] = [...document.querySelectorAll('#id_range')]
    elminputfocus.focus(); 
   
    
  }, [count]);

  return (
    <div style={{ borderTop: `10px solid ${color}` }}>
      {count}
      <button onClick={() => setCount(currentCount => currentCount - 1)}>
        -
      </button>
      <button onClick={() => setCount(currentCount => currentCount + 1)}>
        +
      </button>
      <hr />
      <input
        id="id_range"
        type="range"
        onChange={e => setCount(e.target.value)}
        value={count}
        ref={inputRef}
      />
    </div>
  );
}
