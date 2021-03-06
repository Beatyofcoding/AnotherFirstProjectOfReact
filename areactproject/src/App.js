import React, {useState} from "react";
import Tweet from "./Tweet";

function App() {
  const [users, setUsers] = useState([
    { name: "Tweet User1" ,message: "Testing Message No1"},
    { name: "Tweet User2" ,message: "Testing Message No2"},
    { name: "Tweet User3" ,message: "Testing Message No3"},
    { name: "Tweet User4" ,message: "Testing Message No4"},
  ]);

  const [isGreen, setGreen] = useState(false);
  const [count, setCount] = useState(0);

  const incrementing = () => {
    setCount(count + 1);
    setGreen(!isGreen)
  };

  return (
    <div className="App">
      {users.map(user =>(
        <Tweet name={user.name} message={user.message} />
      ))}
      <h1 className={isGreen ? "green" : ""}>Toggle Switch Color On-Off</h1>
      <button onClick={incrementing}>Increment Button</button>
      <h1 className={isGreen ? "green" : ""}>{count}</h1>
      {/* <h1>TestingApp.js</h1> */}
      {/* <Tweet name="tweet1" message="Hello This Is A Test For Tweet1"/>
      <Tweet name="tweet2" message="Hi This Is Another Test For Tweet2"/>
      <Tweet name="tweet3" message="Hey Hey! Here Is Another Test For Tweet3"/>
      <Tweet name="tweet4" message="Heya and here is the last test message for Tweet4" />  */}

    </div>
  );
}
export default App;