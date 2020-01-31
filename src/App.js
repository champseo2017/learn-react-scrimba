import React from "react";
import Footer from "./Footer"

function App() {
  return (
     <div>
       <nav>
          <h1>Hello a third time!</h1>
          <ul>
              <li>Thing 1</li>
              <li>Thing 2</li>
              <li>Thing 3</li>
          </ul>
          <main>
            <p>THis is where most of my content will go...</p>
          </main>
          <Footer/>
        </nav>
    </div>
  )
}

export default App

/*
ReactDOM.render(<App/>, document.getElementById("root"));
ReactDOM.render(<App/>->(<MyInfo/>-><div>...</div>), document.getElementById("root"))
ReactDOM.render(<App/>->(<AwesomeFooter/>-><footer>...</footer>), document.getElementById("root"))
ReactDOM.render(<App/>->(<AwesomeHeader/>)->(<MyNavbar/>)->(<Logo/>), document.getElementById("root"))

ReactDOM.render(<App/>->(<AwesomeHeader/>-><Logo/>-><img../>), document.getElementById("root"))

ReactDOM.render(<App/>->(MyNavbar)-><nav>...</nav>, document.getElementById("root"));





*/