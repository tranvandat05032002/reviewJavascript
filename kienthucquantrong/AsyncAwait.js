const p = Promise.resolve("hello");

// Muốn dùng async await cho cái promise trên thì phải tạo 1 function
// Vì async chỉ dùng cho function
// main là 1 function return về promise nhé
const main = async () => {
  const data = await p;
  console.log(data);
};
main();
