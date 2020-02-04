import React, { Children } from "react"
class App extends React.Component {
  constructor () {
    super()
    this.state = {
      count: 0
    }
    this.hanleClick = this.hanleClick.bind(this)
  }

  hanleClick() {
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      }
    })
  }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.hanleClick}>Change !</button>
        <ChildrenComponent count={this.state.count}/>
      </div>
    )
  }
}

export default App