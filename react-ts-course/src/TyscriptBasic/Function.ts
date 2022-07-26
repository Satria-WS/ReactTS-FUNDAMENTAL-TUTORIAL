import React from "react";

let PrintName: Function;
PrintName = (name: string) => {
    return name;
};

const hello: Function = () => {
    return "Hello";
};

//if you're having problem add void type
let consoleName: (name: string) => void;
