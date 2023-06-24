// // initialize
const bike: string = "Toyota";
const vote: number = 12;
const real: boolean = false;
// object
const car: { name: string; color: string } = {
  name: "Mazda",
  color: "red",
};
// array
// array string
let animal: string[] = ["bird", "bee"];
animal.push("Lion", "Tiger", "penguin", "seal");
//array number
const primeNumber: number[] = [2, 3, 5, 7, 11];
// array any
const arrayAny: any[] = ["1", 2, 3, 4, "abc", false];
// object into an array
const info: { name: string; age: number; SDT: string }[] = [];
info.push({ name: "tranvandat", age: 21, SDT: "111111111111" });
// function have return
function sumNumber(a: number, b: number): number {
  return a + b;
}
// function haven't return
function displayHello(name: string): void {
  console.log(name + "hello");
}
// Arrow function gán 1 function
const addNumber: (a: number, b: number) => number = (a: number, b: number) =>
  a + b;

/**
 *  interface sử dụng như type
 *  khác nhau giữa interface và type:
 * interface: không có | và & dùng để union và merge thay vào đó sử dụng extends đê merge
 * tyoe: có | và & và dùng để union và merge
 */
// Interface
interface IState {
  isLogin: boolean;
  userName: string;
  age: number;
}
interface IStudent extends IState {
  schoolName: string;
}
const studentA: IStudent = {
  isLogin: false,
  userName: "Tran Van Dat",
  age: 21,
  schoolName: "Hue university of science",
};
// Type
type TState = {
  isLogin: boolean;
  userName: string;
  age: number;
};
type TSchool = {
  schoolName: string;
};
type TStudent = TState & TSchool;
const studentB: TStudent = {
  isLogin: false,
  userName: "Tran Van Dat",
  age: 22,
  schoolName: "Hue university of science",
};

console.log(JSON.stringify(studentA));
console.log(JSON.stringify(studentB));

// Enum
enum statusPort {
  ERROR = 404,
  SUCCESS = 200,
}
const errorCode: number = statusPort.ERROR;

// class
class Person {
  private name: string;
  private age: number;
  private birthDay: string;
  private permission: string;
  constructor(name: string, age: number, birthDay: string, permission: string) {
    this.name = name;
    this.age = age;
    this.birthDay = birthDay;
    this.permission = permission;
  }
  public getName(): string {
    return this.name;
  }
  public setName(name: string): void {
    this.name = name;
  }
}
// build state
const simpleState = (
  value: string
): [() => string, (preValue: string) => void] => {
  return [
    () => value,
    (preValue) => {
      return (value = preValue);
    },
  ];
};
const [state, setState] = simpleState("TranVanDat");
console.log(state());
setState("Dat");
console.log(state());
// Generics function
//Dang 1:
const simpleStateMulType = <T>(value: T): [() => T, (preValue: T) => void] => {
  return [
    () => value,
    (preValue: T) => {
      return (value = preValue);
    },
  ];
};

const [value1, setValue1] = simpleStateMulType(100);
// 100
setValue1(256);
console.log(value1());
const [value2, setValue2] = simpleStateMulType("Terrible");
setValue2("penguin");
console.log(value2());
// Dang 2
interface IRankType<IRN> {
  item: IRN;
  handleRank: number;
}
function ranker<RN>(items: RN[], rank: (item: RN) => number): RN[] {
  const ranks: IRankType<RN>[] = items.map((item) => ({
    item,
    handleRank: rank(item),
  }));
  ranks.sort((a, b) => a.handleRank - b.handleRank);
  return ranks.map((rank) => rank.item);
}

console.log(ranker([5, 3, 2, 4, 1], (n) => n * 5));
const language: { name: string; difficult: number }[] = [
  {
    name: "JS",
    difficult: 60,
  },
  {
    name: "ReactJS",
    difficult: 80,
  },
  {
    name: "JQuery",
    difficult: 40,
  },
];
const sortRanker = ranker(language, (n) => n.difficult);
console.log(sortRanker);

type user = {
  name: string;
  age: number;
};
// generics with arrow function
// const identity = <Type>(value: Type) => value;
// generics with function
function identity<Type>(value: Type) {
  return value;
}
interface Identity<Type> {
  (value: Type): Type;
}
const myIdentity: Identity<number> = identity;
const result = identity<user>({ name: "Tran Van Dat", age: 21 });
// Ràng buộc trong Generic keyword : Extends

interface Animal {
  name: string;
}
const logAnimal = <T extends Animal>(value: T): T => {
  console.log(value.name);
  return value;
};
logAnimal({ name: "penguin" });

// Keyof of object
// get value for key
const getValue = <Obj, Key extends keyof Obj>(obj: Obj, key: Key) => {
  return obj[key];
};
console.log(getValue({ name: "tranvandat", age: 21 }, "age"));
//Default generic
function getNumber<T = number>(value: T): T {
  return value;
}
console.log(getNumber(12));

interface Box<Type = string> {
  value: Type;
}
const box: Box = {
  value: "Tran van dat",
};
console.log(box);
// union
function testGeneric<Type>(value: Type): Type {
  return value;
}
console.log(testGeneric<number | string>(1));
