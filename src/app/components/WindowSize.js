import React, { useState, useEffect } from "react";
export default function WindowSize() {
  const [[windowWidth, windowHeight], setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight
  ]);
  const [visible, setVisible] = useState(false);
 
  // const width = array[0]
  // const height = array[1]

  useEffect(() => {
    let timeoutId
    let unmountcomponent = true
    const handleResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
      setVisible(true);
      clearTimeout(timeoutId)
    timeoutId = setTimeout(() => {
        setVisible(false);
      }, 500);
    };
    if(unmountcomponent){
        window.addEventListener('resize', handleResize)
    }
    return () => {
        unmountcomponent = false
        window.removeEventListener("resize", handleResize); // unmount
    } 
  }, []);

  return (
      <div className={`window-size ${visible ? '' : 'hidden'}`}>
          {windowWidth} X {windowHeight}
     </div>
  )
}
