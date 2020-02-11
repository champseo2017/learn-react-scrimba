import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }
  render() {
    return (
      <form>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          onChange={this.handleChange}
          value={this.state.firstName}
          autoComplete="off"
        />
        <br />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          onChange={this.handleChange}
          value={this.state.lastName}
          autoComplete="off"
        />
        <h1>
          {this.state.firstName} {this.state.lastName}
        </h1>
      </form>
    );
  }
}

export default App;

/* 
React Docs about Forms:
https://reactjs.org/docs/forms.html


*/
