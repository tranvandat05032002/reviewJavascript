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
