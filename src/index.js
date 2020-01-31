import React from "react";
import ReactDOM from "react-dom";

function App() {
    // ตัวแปร
    const date = new Date();
    const hours = date.getHours();
    let timeOfDay;
    // logic
    if(hours < 12){
        timeOfDay = "morning"
    }else if(hours >= 12 && hours < 17){
        timeOfDay = "afternoon"
    }else{
        timeOfDay = "night";
    }
    // return 
    return (
    <h1>Good {timeOfDay} !</h1>
    )
}
// render function <App/>
ReactDOM.render(<App />, document.getElementById("root"));
