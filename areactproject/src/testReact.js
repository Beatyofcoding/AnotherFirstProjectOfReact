import React from "react";

function TestFunc(){
    const testing = () => {
        console.log("testingOnConsoleLog");
      };
    return (
        <div>
            <button onClick={testing}>Button Test</button>
        </div>
    );
}
export default TestFunc;