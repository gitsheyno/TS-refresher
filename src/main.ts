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

//-----------------------------------------<< Type assertion >>-----------------------------------------

type One = string;
type Two = string | number;
type Three = "hello";

let a: One = "hello";
console.log(a);
let b = a as Two;
console.log(b, a);
let c = a as Three;
console.log(c, a);

let d = <One>"World";
console.log(d);

const addOrConcat = (
  a: number,
  b: number,
  c: "add" | "concat"
): number | string => {
  if (c === "add") {
    return a + b;
  }

  return "" + a + b;
};

let myVal: string = addOrConcat(1, 2, "concat") as string;
let nextVal: number = addOrConcat(1, 2, "add") as number;

//-----------------------------------------<< DOM >>-----------------------------------------

const img = document.querySelector("img")!;
const myImg = document.getElementById("#img") as HTMLImageElement;

// img.src;
// myImg.src;

//-----------------------------------------<< Class >>-----------------------------------------

class Coder {
  secondLang!: string;

  constructor(
    public readonly name: string,
    public music: string,
    private age: number,
    protected lang: string = "TS"
  ) {
    this.name = name;
    this.music = music;
    this.age = age;
    this.lang = lang;
  }

  public getAge(): string {
    return `Hello,I'm ${this.age}`;
  }
}

const Shayan = new Coder("shayan", "rock", 27);

console.log(Shayan.getAge());
// console.log(Shayan.age);
// console.log(Shayan.lang);

//-----------------------------------------<< Extends >>-----------------------------------------

class WebDec extends Coder {
  constructor(
    public computer: string,
    name: string,
    age: number,
    music: string
  ) {
    super(name, music, age);
    this.computer = computer;
  }

  public getLang() {
    return `I do ${this.lang}`;
  }
}

const Sara = new WebDec("mac", "sara", 30, "rap");

console.log(Sara.getLang());
console.log(Sara.getAge());

//-----------------------------------------<< Interface >>-----------------------------------------

interface Musician {
  name: string;
  instrument: string;
  play(action: string): string;
}

class Guitrarist implements Musician {
  name: string;
  instrument: string;

  constructor(name: string, instrument: string) {
    this.name = name;
    this.instrument = instrument;
  }

  play(action: string): string {
    return `${this.name} ${action} the ${this.instrument}`;
  }
}

const Page = new Guitrarist("jimmy", "guitar");
console.log(Page.play("strums"));

//-----------------------------------------<< Static >>-----------------------------------------

class Peeps {
  static count: number = 0;

  static getCount(): number {
    return Peeps.count;
  }

  public id: number;

  constructor(public name: string) {
    this.name = name;
    this.id = ++Peeps.count;
  }
}

const John = new Peeps("john");
const Hiba = new Peeps("hiba");
const abas = new Peeps("abas");
const asghar = new Peeps("asghar");
const heshmat = new Peeps("heshmat");

console.log(heshmat);
console.log(Peeps);
console.log(Peeps.count);
console.log(Peeps.getCount());

//-----------------------------------------<< Get Set >>-----------------------------------------

class Bands {
  private dataState: string[];

  constructor() {
    this.dataState = [];
  }

  public get data(): string[] {
    return this.dataState;
  }

  public set data(value: string[]) {
    if (Array.isArray(value) && value.every((el) => typeof el === "string")) {
      this.dataState = value;
      return;
    } else throw new Error("params is no an array of strings");
  }
}

const MyBand = new Bands();
MyBand.data = ["band1", "band2"];
console.log(MyBand.data);

//-----------------------------------------<< Index signiture >>-----------------------------------------

interface TransactionOBj {
  [index: string]: number;

  Pizza: number;
  Books: number;
  Jobs: number;
}
// interface TransactionOBj {
//   [index: string]: number;
// }

const todaysTransaction: TransactionOBj = {
  Pizza: -8,
  Books: -10,
  Jobs: 50,
  shayan: 100,
};

console.log(todaysTransaction.Pizza);
console.log(todaysTransaction["Pizza"]);
let prop: string = "Pizza";
// console.log(todaysTransaction[prop]);

const todayNEt = (transactions: TransactionOBj): number => {
  let total: number = 0;
  for (const transaction in transactions) {
    total += transactions[transaction];
  }

  return total;
};

console.log(todayNEt(todaysTransaction));
console.log(todaysTransaction["shayan"]);

interface Student {
  [key: string]: string | number | number[] | undefined;

  name: string;
  GPA: number;
  classes?: number[];
}

const student: Student = {
  name: "shayan",
  GPA: 3.5,
  classes: [7, 8, 9],
};

for (const key in student) {
  console.log(`${key} : ${student[key]}`);
}

const logStudentsKey = (student: Student, key: keyof Student): void => {
  console.log(`Student ${key} : ${student[key]}`);
};

// interface Inomes {
//   [index: string]: number;
// }

type Streams = "salary" | "bonus" | "sidehustle";

type Incomes = Record<Streams, number>;

const todayIncome: Incomes = {
  salary: 100,
  bonus: 20,
  sidehustle: 12,
};

for (const key in todayIncome) {
  console.log(`${key} : ${todayIncome[key as keyof Incomes]}`);
}
