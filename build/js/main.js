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
//-----------------------------------------<< Class >>-----------------------------------------
class Coder {
    constructor(name, music, age, lang = "TS") {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    getAge() {
        return `Hello,I'm ${this.age}`;
    }
}
const Shayan = new Coder("shayan", "rock", 27);
console.log(Shayan.getAge());
// console.log(Shayan.age);
// console.log(Shayan.lang);
//-----------------------------------------<< Extends >>-----------------------------------------
class WebDec extends Coder {
    constructor(computer, name, age, music) {
        super(name, music, age);
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        return `I do ${this.lang}`;
    }
}
const Sara = new WebDec("mac", "sara", 30, "rap");
console.log(Sara.getLang());
console.log(Sara.getAge());
class Guitrarist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action} the ${this.instrument}`;
    }
}
const Page = new Guitrarist('jimmy', 'guitar');
console.log(Page.play('strums'));
//-----------------------------------------<< Static >>-----------------------------------------
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
}
Peeps.count = 0;
const John = new Peeps('john');
const Hiba = new Peeps('hiba');
const abas = new Peeps('abas');
const asghar = new Peeps('asghar');
const heshmat = new Peeps('heshmat');
console.log(heshmat);
console.log(Peeps);
console.log(Peeps.count);
console.log(Peeps.getCount());
//-----------------------------------------<< Get Set >>-----------------------------------------
class Bands {
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) && value.every(el => typeof el === 'string')) {
            this.dataState = value;
            return;
        }
        else
            throw new Error('params is no an array of strings');
    }
}
const MyBand = new Bands();
MyBand.data = ['band1', 'band2'];
console.log(MyBand.data);
