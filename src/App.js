import React, {Component} from "react";
class App extends Component {
  constructor() {
    super()
    this.state = {}
  }

  static getDerivedStateFromProps(props, state) {
      // return the new, updated state based upon the props
      // https://reactjs.org/docs/react-component.html#static-getderivedstatefromprops
        // https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html
  }

  getSnapshotBeforeUpdate() {
    // create a backup of the current way things are
     // https://reactjs.org/docs/react-component.html#getsnapshotbeforeupdate
  }

  // componentWillMount(){

  // }

  componentDidMount() {
    // GET the data I need to correctly display

  }

  // componentWillReceiveProps(nextProps) {
  //     if(nextProps.whatever !== this.props.whatever){
  //           // do someting important here
  //     }
  // }

  shouldComponentUpdate(nextProps, nextState) {
      // return true if want it to update
      // return false if not
  }

  // componentWillUpdate(){

  // }

  componentWillUnmount(){
    // remove event listener
    // (  E.g remove event listeners )teradow or cleanup your code before your component disappears
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
