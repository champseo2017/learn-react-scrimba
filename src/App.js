import React, {Component} from "react";
class App extends Component {
  constructor() {
    super()
    this.state = {}
  }

  componentDidMount() {
    // GET the data I need to correctly display

  }

  componentWillReceiveProps(nextProps) {
      if(nextProps.whatever !== this.props.whatever){
            // do someting important here
      }
  }

  shouldComponentUpdate(nextProps, nextState) {
      // return true if want it to update
      // return false if not
  }

  componentWillUnmount(){
    // remove event listener
    // ( E.g remove event listeners )teradow or cleanup your code before your component disappears
  }

  render() {
    return (
      <div>
        Code goes here
      </div>
    )
  }
}

export default App
