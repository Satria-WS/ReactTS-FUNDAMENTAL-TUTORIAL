import React from "react";

type Person = {
    name: string;
    //add question mark , this property is now optional
    age?: number;
};

let person: Person = {
    name: "tole",
};


//add any type , is not recommended
let namePerson: any;
namePerson = "ss4";
//add type unknown also take any type
let nameFBI: unknown;

//##interface and type
//type
type X = {
    a: string;
    b: number;
};

type Y = X & {
    c: string;
    d: number;
};

let y: Y = {
    a: "sdf",
    b: 34,
    c: "efdas",
    d: 42,
};

//interface
interface Spiderman {
    name: String;
    age?: number;
}

interface Guy extends Spiderman {
    profession: string;
}

let nameGug : Guy = {
    name:"sdf",
    age:34,
    profession:"sdf"
}
