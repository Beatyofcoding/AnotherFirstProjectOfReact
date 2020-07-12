import React from "react";

function test(){
    const testReact = () => {
        console.log("test");
      };
    return (
        <div>
            <button onClick={testReact}>TestingButton</button>
        </div>
    );
}
export default test;