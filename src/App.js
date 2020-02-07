import React, { Component } from "react";
import { Offline, Online } from "react-detect-offline";
// https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch
class App extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      character: []
    };
  }
  componentDidMount() {
    this.setState({ loading: true });
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(data => {
        this.setState({
          loading:false,
          character: data
        });
      });
  }
  render() {
   
    const text = this.state.loading ? <h1>loading...</h1> :  this.state.character.map((value,key) => {
    return <p key={key}>Title: {value.title}</p>
    });
    return (
      <div>
        {/* 
          data online -> props(dataonline) -> component offline (props(data online)) -> sends to redux or component any
        */}
        <Online polling={false}><h1>Online: Data</h1> {text}</Online>
        <Offline polling={false}><h1>Offline: Data not refresh pages</h1> {text}</Offline>
      </div>
    );
  }
}

export default App;
