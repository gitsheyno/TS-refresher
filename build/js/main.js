"use strict";
// -----------------------------------------<< Basic types >>-----------------------------------------
let myName = "Shayan";
let meaningOFLife;
let isLoading;
let album;
myName = "23";
meaningOFLife = 27;
isLoading = true;
album = 10;
const sum = (a, b) => {
    return a + b;
};
let postId;
let isActive;
let re = /\w+/g;
//-----------------------------------------<< arrays >>-----------------------------------------
let stringAr = ["shayan", "amir", "abas"];
let guitars = ["strat", 5150];
let mixedData = ["ABC", true, 2123];
stringAr[0] = "john";
guitars[0] = 2023;
let test = [];
let bands = [];
bands[0] = "shayan";
//-----------------------------------------<< tuple >>-----------------------------------------
let myTuple = ["Dave", 27, true];
let mixed = ["john", 1, false];
myTuple[1] = 23;
//-----------------------------------------<< Object >>-----------------------------------------
let myObj;
const exampleObj = {
    prop1: "shayan",
    prop2: true,
};
exampleObj.prop2 = false;
let evh = {
    name: "shayan",
    active: true,
    alboum: [2000, 20001, "hallo"],
};
let obj2 = {
    name: "asghar",
    active: false,
};
console.log(obj2);
// const greetGuitarist = (guitarist: Guitarist) => {
//   return `hello ${guitarist.name}`;
// };
const greetGuitarist = (guitarist) => {
    var _a;
    return `hello ${(_a = guitarist.name) === null || _a === void 0 ? void 0 : _a.toUpperCase()}`;
};
console.log(greetGuitarist(obj2));
//-----------------------------------------<< Enum >>-----------------------------------------
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 0] = "U";
    Grade[Grade["D"] = 1] = "D";
    Grade[Grade["C"] = 2] = "C";
    Grade[Grade["B"] = 3] = "B";
    Grade[Grade["A"] = 4] = "A";
})(Grade || (Grade = {}));
//literal types
let myName2 = "Shayan";
const add = (a, b) => {
    return a + b;
};
const sayHello = (message) => {
    console.log(message);
};
let multiply = function (a, b) {
    return a + b;
};
const addAll = (a, b, c) => {
    if (typeof c !== "undefined")
        return a + b + c;
    return a + b;
};
const sumAll = (a, b, c = 2) => {
    return a + b + c;
};
const total = (...nums) => {
    return nums.reduce((num, acc) => num + acc, 0);
};
let a = "hello";
console.log(a);
let b = a;
console.log(b, a);
let c = a;
console.log(c, a);
let d = "World";
console.log(d);
const addOrConcat = (a, b, c) => {
    if (c === "add") {
        return a + b;
    }
    return "" + a + b;
};
let myVal = addOrConcat(1, 2, "concat");
let nextVal = addOrConcat(1, 2, "add");
//-----------------------------------------<< DOM >>-----------------------------------------
const img = document.querySelector("img");
const myImg = document.getElementById("#img");
// img.src;
// myImg.src;
