// // promise không phụ thuộc vào .then
// const promise = new Promise((resolve, reject) => {
//   console.log("Executing promise");
//   resolve("Success");
// });
// promise.then((resolve) => {
//   console.log("Promise resoled: ", resolve); // bất đồng bộ
// });
// console.log("Promise created");
// // .promise phụ thuộc vào .then

// const promiseFnc = () => {
//   return new Promise((resolve, reject) => {
//     console.log("Executing promise....");
//     resolve("Success");
//   });
// };
// promiseFnc().then((resolve) => {
//   console.log("Promise resoled......: ", resolve); // bất đồng bộ
// });
// console.log("promise created......");
// // convert callback to promise

// const data = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("1");
//   }, 1000);
// });
// data.then((res) => {
//   console.log(res);
// });

// // tạo nhanh một promise
// const presolve = Promise.resolve(100);
// presolve.then((res) => {
//   console.log(res);
// });
// async function return về 1 promise
const handle = async () => {
  return "hello";
};
handle().then((res) => {
  console.log(res);
});
// async function sẽ bằng với 1 async function return về 1 promise và bằng với function return 1 promise
// async fucntion return a promise
const handlePromise = async () => {
  return Promise.resolve("This is async function return a promise");
};
handlePromise().then((res) => {
  console.log(res);
});
// function return a promise
const handlePromise2 = () => {
  return Promise.resolve("This function return a promise");
};
handlePromise2().then((res) => {
  console.log(res);
});
// all trong promise return a array
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise1 success!");
  }, 1000);
});
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise2 success!");
  }, 2000);
});
const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise3 success!");
  }, 3000);
});
const promiseAll = Promise.all([promise1, promise2, promise3]);
promiseAll.then((res) => {
  console.log(res);
});
// kết quả của then trước là kết quả của then sau
const handle3 = async () => {
  return 12;
};
handle3()
  .then((res) => {
    return res + 17;
  })
  .then((res) => {
    console.log(res); // --> 29
  });

const handleHello = new Promise((resolve, reject) => {
  return resolve("Hello");
});
const handleFullHelloWorld = (value) => {
  return Promise.resolve(value + "World");
};
// callbackHell
handleHello.then((res) => {
  handleFullHelloWorld(res).then((res) => {
    console.log(res);
  });
});
// --> Callback hell và không được khuyến khích sử dụng
// giải quyết callbackHell
handleHello
  .then((res) => {
    return handleFullHelloWorld(res);
  })
  .then((res) => {
    console.log(res);
  });
// 1 ứng dụng k có catch thì sẽ dẫn đến crash ứng dụng
Promise.reject("hello")
  // bor then và catch --> crash
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.log(error);
  });
console.log("hello");

// notes: khi catch thì tuyệt đối k đc resolve sau khi catch vì catch xong nó nhảy vào .then
