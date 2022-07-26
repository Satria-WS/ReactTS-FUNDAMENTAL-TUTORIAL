import React from "react";
import "./App.css";

//## react ts
let name: string = "samurai";
let age: number;
let isStudent: boolean;
//string of array
let hobbies: string[];
//can contain 1 number and 1 string
let role: [number, number, string];
role = [4, 5, "gg"];

function App(): JSX.Element {
    return (
        <div className="App">
            <h3>Hello asdsadworlsdfsdfd push</h3>
            <h3>{name}</h3>
        </div>
    );
}

export default App;
