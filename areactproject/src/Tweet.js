import React from "react"
import "./App.css"

function Tweet(props){
    return(
        <div className="tweet">
            <h3>{props.name}</h3>
            <p>Tweet Message for test</p>
            <h3>Likes Number</h3>

        </div>
    );
}

export default Tweet;