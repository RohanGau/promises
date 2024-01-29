const cart = ["shoes", "pants", "kurta"];

// const promise = createOrder(cart); // orderId

// promise
//   .then(function (orderId) {
//     console.log(orderId);
//     proceedToPayment(orderId);
//   })
//   .catch(function (error) {
//     console.log("error :", error);
//   });

createOrder(cart)
  .then(function (orderId) {
    console.log("orderId :", orderId);
    return orderId;
  })
  .catch(function (error) {
    console.log(error.message);
  })
  .then(function (orderId) {
    return proceedToPayment(orderId);
  })
  .then(function (paymentInfo) {
    console.log("paymentInfo :", paymentInfo);
  })
  .catch(function (error) {
    console.log(error.message);
  })
  .then(function (orderId) {
    console.log("No matter what happens, I will definietely be called.");
  });

function proceedToPayment(orderId) {
  return new Promise(function (resolve, reject) {
    resolve("payment successful");
  });
}

/// producer end --> own createOrder function

function createOrder(cart) {
  // new promise is a promise constructor
  const pr = new Promise(function (resolve, reject) {
    // createOrder
    // validateCard
    // orderId
    if (!validateCart(cart)) {
      const err = new Error("cart is not valid");
      reject(err);
    }
    // logic for create order
    const orderId = "12345";
    if (orderId) {
      setTimeout(function () {
        resolve(orderId);
      }, 5000);
    }
  });
  return pr;
}

function validateCart(cart) {
  return true;
}

// promises all

const p1 = new Promise(function (resolve, reject) {
  // setTimeout(() => resolve("P1 success"), 3000);
  setTimeout(() => reject("P1 reject"), 3000);
});

const p2 = new Promise(function (resolve, reject) {
  // setTimeout(() => resolve("P2 success"), 1000);
  setTimeout(() => reject("P2 failed"), 1000);
});

const p3 = new Promise(function (resolve, reject) {
  // setTimeout(() => resolve("P3 success"), 2000);
  setTimeout(() => reject("P3 reject"), 2000);
});

// Promise.all([p1, p2, p3])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((error) => console.log("promise all error", error));

// Promise.allSettled([p1, p2, p3])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((error) => console.log("promise settled error", error));

// Promise.race([p1, p2, p3])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((error) => console.log("promise settled error", error));

Promise.any([p1, p2, p3])
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.log("promise any error", error);
    console.log("promise any error", error.errors); // will get the aggregator error
  });
