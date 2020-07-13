import React from "react";

function TestFunc(){
    const testing = () => {
        console.log("testingOnConsoleLog");
      };
    return (
        <div>
      <h4>Testing Component-testReact.js Component</h4>
            <button onClick={testing}>Button Test</button>
        </div>
    );
}
export default TestFunc;