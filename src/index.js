import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

function MyApp(){
    return (
        <div>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
        </div>
    )
}

ReactDOM.render(
  <MyApp/>,
  document.getElementById("root")
);
serviceWorker.unregister();

/* 
react function component


*/
