// Class không phải là một object
// class là một template tạo ra 1 object
class Person {
  constructor(name, age, gioiTInh) {
    this.name = name;
    this.age = age;
    this.gioiTInh = gioiTInh;
  }
  getName() {
    return this.name;
  }
  getAge() {
    return this.age;
  }
  getGioiTInh() {
    return this.gioiTInh;
  }
}
class Teacher extends Person {
  constructor(name, age, gioitinh, salary) {
    super(name, age, gioitinh);
    this.salary = salary;
  }
}
const student = new Person("TranVanDat", 21, false);
console.log(JSON.stringify(student));
const teacher = new Teacher("TranVanB", 35, false, 10000000);
console.log(JSON.stringify(teacher));
