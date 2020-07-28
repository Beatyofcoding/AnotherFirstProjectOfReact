import React, {useState} from "react";
import Tweet from "./Tweet";

function App() {
  const [user, setUser] = useState([
    { name: "Tweet User1" ,message: "Testing Message No1"},
  ]);

  const [isGreen, setGreen] = useState(false);
  const [count, setCount] = useState(0);

  const incrementing = () => {
    setCount(count + 1);
    setGreen(!isGreen)
  };

  return (
    <div className="App">
      <h1 className={isGreen ? "green" : ""}>Toggle Switch Color On-Off</h1>
      <button onClick={incrementing}>Increment Button</button>
      <h1>{count}</h1>
      {/* <h1>TestingApp.js</h1> */}
      {/* <Tweet name="tweet1" message="Hello This Is A Test For Tweet1"/>
      <Tweet name="tweet2" message="Hi This Is Another Test For Tweet2"/>
      <Tweet name="tweet3" message="Hey Hey! Here Is Another Test For Tweet3"/>
      <Tweet name="tweet4" message="Heya and here is the last test message for Tweet4" />  */}

    </div>
  );
}
export default App;