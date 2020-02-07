import React, { Component } from "react";
import Conditional from "./Conditional";

class App extends Component {
  constructor() {
    super();
    this.state = {
      unredMessages: ["a", "b"]
    };
  }
  // &&
  // false && false
  // true && false
  // true && true
  render() {
    return (
      <div>
        {this.state.unredMessages.length > 0 && (
          <h2>You have {this.state.unredMessages.length} unread messages!</h2>
        )}
      </div>
    );
  }
}

export default App;
