import React, { useState, useEffect } from "react";
import randomcolor from "randomcolor";
function App() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("");

  useEffect(() => {
    var countnum = 0;
    const intervalId = setInterval(() => {
      countnum++;
      setCount(prevCount => prevCount + 1);
      if (countnum === 5) {
        clearInterval(intervalId);
      }
    }, 1000);
  }, []);

  useEffect(() => {
    setColor(randomcolor());
  }, [count]);
  return (
    <div>
      <h1 style={{ color: color }}>{count}</h1>
    </div>
  );
}
export default App;
