const arrFunc = (a, b) => a + b;

// con trỏ this trong function: sẽ truy xuất đến đối tượng goin nó
//vd:
function getName1() {
  console.log(this);
}
const getName2 = () => {
  console.log(this);
};
// --> this trỏ đến object person
// Con trỏ this trong arrow function sẽ truy xuất đến môi trường nodeJS nếu đang chạy trên nodeJS, window
// nếu chạy trên browser

const person = {
  name: "TranVanDat",
  getName1,
  getName2,
};
// person.getName1();
person.getName2();
