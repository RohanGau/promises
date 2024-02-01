const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resolved value!!");
  }, 5000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resolved value!!");
  }, 10000);
});
// async function getData() {
//   return p;
// }

// const dataPromise = getData();

// dataPromise.then((res) => console.log(res));

// await can only be used inside a async function
async function handlePromise() {
  console.log("Hello World");
  // JS engine was waiting for promise to resolved
  const val = await p1;
  console.log("Namaste Javascript");
  console.log(val);

  const val2 = await p2;
  console.log("Namaste Javascript 2");
  console.log(val2);
}

handlePromise();

// function getData() {
//   // JS engine will not wait for promise to be resolved
//   p.then((res) => console.log(res));
//   console.log("Namaste Javascript")
// }

// getData();
