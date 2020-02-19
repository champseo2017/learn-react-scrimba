/* 
 componentDidMount
 componentDidUpdate
 componentWillUnmount
*/
// Side effects?
// Network request
// Manual DOM manipulatton
// Event listeners or timeouts and intervals

import React, { useState, useEffect } from "react";
import randomcolor from "randomcolor";
function App() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState(""); // componentDidMount | initial state | value default
  function increment() {
    setCount(prevCount => prevCount + 1);
  }
  function decrement() {
    setCount(prevCount => prevCount - 1);
  }

  useEffect(() => {
      setColor(randomcolor())
  },[count]); // [count, otherVars]
  // state change component render (run function)

  /* useEffect
  useEffect({}) state change component render (run function) (componentDidUpdate)
  componentDidUpdate (state change run useEffect) -> componentDidMount(DidMount ->state -> dom)
  componentWillUnmount

  2. Didmount only (componentDidMount)
  useEffect(() => {
    setColor(randomcolor())
  },[])
  componentWillUnmount
  */
  
  return (
    <div>
        <h1 style={{color: color}}>{count}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
    </div>
  );
}
export default App;