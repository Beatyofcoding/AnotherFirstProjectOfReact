import React from "react";
import Tweet from "./Tweet";

function App() {
  
  return (
    <div className="App">
      {/* <h1>TestingApp.js</h1> */}
      <Tweet name="tweet1" message="Hello This Is A Test For Tweet1"/>
      <Tweet name="tweet2"/>
      <Tweet name="tweet3"/>
      <Tweet name="tweet4"/>

    </div>
  );
}
export default App;