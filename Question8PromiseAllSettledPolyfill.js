// Create polyfill for Promise.allSettled

// The idea here is pretty simple
// 1. Create polyfill for Promise.all
// 2. Then as we know with Promise.allSettled the simple logic is that the api always returns value even with any promise rejected
// 3. So what we do is we modify the promises that we receive
// 4. We create an array map and pass in all promises and then we modify then, even when a promise is rejected we need to pass it as an object with status and reason
// 5. Using Promise.resolve(value,reason) we solve our problem 

Promise.myPromiseAll = function (promises) {
  return new Promise((resolve, reject) => {
    const results = [];
    let completedPromises = 0;
    if (promises.length === 0) resolve(results);

    promises.forEach((singlePromise, index) => {
      Promise.resolve(singlePromise)
        .then((value) => {
          results[index] = value;
          completedPromises++;
          if (completedPromises === promises.length) {
            resolve(results);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  });
};

Promise.myPromiseAllSettled = function (promises) {
  return Promise.myPromiseAll(
    promises.map((singlePromise) => {
      return Promise.resolve(singlePromise).then(
        (val) => ({ status: "fulfilled", value: val }),
        (err) => ({ status: "rejected", reason: err })
      );
    })
  );
};

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Resolve Promise 1");
  }, 4000);
});

const promise2 = new Promise((resolve, reject) => {
  resolve("Resolve Promise 2");
});

const promise3 = new Promise((resolve, reject) => {
  resolve("Resolve Promise 3");
});

Promise.myPromiseAllSettled([promise1, promise2, promise3])
  .then((data) => {
    console.log("Data is ", data);
  })
  .catch((error) => {
    console.log("Error is ", error);
  });
