import React from "react";
import Joke from "./Joke";
function App() {
  return (
    <div>
      <Joke
        punchLine="I don't know, but the flag is a big plus!"
      />
      <Joke
         question="Did you hear about the mathematician who's afraid of negative numbers?"
         punchLine="He'll stop at nothing to avoid them!"
      />
      <Joke
         question="Hear about the new restaurant called Karma?"
         punchLine="There’s no menu: You get what you deserve."
      />
      <Joke
         question="Did you hear about the actor who fell through the floorboards?"
         punchLine="He was just going through a stage."
      />
    
    </div>
  )
}
export default App;