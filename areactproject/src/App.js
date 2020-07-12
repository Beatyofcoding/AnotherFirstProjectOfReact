import React from "react";

function App() {
  const testReact = () => {
    console.log("TestingReact");
  };


  return(
    <div>
      <h1>Testing React!</h1>
      <button onClick={testReact} >Testing Button</button>
    </div>
  );
}
export default App;