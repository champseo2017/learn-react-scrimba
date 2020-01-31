import React from "react";
import ReactDOM from "react-dom";

function App() {
  // ตัวแปร
  const date = new Date(2020, 1, 31, 15);
  const hours = date.getHours();
  let timeOfDay;
  const styles = {
    fontSize: 30,
  };
  // logic
  if (hours < 12) {
    timeOfDay = "morning";
    styles.color = "#04756F"
    Object.assign({}, styles, styles.color)
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "afternoon";
    styles.color = "#8914A3"
    Object.assign({}, styles, styles.color)
  } else {
    timeOfDay = "night";
    styles.color = "#D90000"
    Object.assign({}, styles, styles.color)
  }

  // return
  return <h1 style={styles}>Good {timeOfDay} !</h1>;
}
// render function <App/>
ReactDOM.render(<App />, document.getElementById("root"));
