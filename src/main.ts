// -----------------------------------------<< Basic types >>-----------------------------------------

let myName: string = "Shayan";
let meaningOFLife: number;
let isLoading: boolean;
let album: string | number;

myName = "23";
meaningOFLife = 27;
isLoading = true;
album = 10;

const sum = (a: number, b: number) => {
  return a + b;
};

let postId: string | number;
let isActive: number | boolean;

let re: RegExp = /\w+/g;

//-----------------------------------------<< arrays >>-----------------------------------------

let stringAr = ["shayan", "amir", "abas"];
let guitars = ["strat", 5150];
let mixedData = ["ABC", true, 2123];

stringAr[0] = "john";
guitars[0] = 2023;

let test = [];
let bands: string[] = [];
bands[0] = "shayan";

//-----------------------------------------<< tuple >>-----------------------------------------

let myTuple: [string, number, boolean] = ["Dave", 27, true];

let mixed = ["john", 1, false];

myTuple[1] = 23;

//-----------------------------------------<< Object >>-----------------------------------------

let myObj: object;

const exampleObj = {
  prop1: "shayan",
  prop2: true,
};

exampleObj.prop2 = false;

type Guitarist = {
  name?: string;
  active: boolean;
  alboum?: (string | number)[];
};

let evh: Guitarist = {
  name: "shayan",
  active: true,
  alboum: [2000, 20001, "hallo"],
};

let obj2: Guitarist = {
  name: "asghar",
  active: false,
};

console.log(obj2);

// const greetGuitarist = (guitarist: Guitarist) => {
//   return `hello ${guitarist.name}`;
// };

const greetGuitarist = (guitarist: Guitarist) => {
  return `hello ${guitarist.name?.toUpperCase()}`;
};

console.log(greetGuitarist(obj2));

//-----------------------------------------<< Enum >>-----------------------------------------

enum Grade {
  U,
  D,
  C,
  B,
  A,
}

//-----------------------------------------<< Function >>-----------------------------------------

// type allias

type stringOrNumber = string | number;

type stringOrNumberArray = (string | number)[];

type Artist = {
  name?: string;
  active: boolean;
  alboum: stringOrNumberArray;
};

type userId = stringOrNumber;

//literal types

let myName2 = "Shayan";

const add = (a: number, b: number): number => {
  return a + b;
};

const sayHello = (message: any): void => {
  console.log(message);
};

// type mathFunction = (a: number, b: number) => number;
interface mathFunction {
  (a: number, b: number): number;
}

let multiply: mathFunction = function (a, b) {
  return a + b;
};

const addAll = (a: number, b: number, c?: number): number => {
  if (typeof c !== "undefined") return a + b + c;
  return a + b;
};

const sumAll = (a: number, b: number, c: number = 2): number => {
  return a + b + c;
};

const total = (...nums: number[]): number => {
  return nums.reduce((num, acc) => num + acc, 0);
};
