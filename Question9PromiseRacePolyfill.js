// Create polyfill for Promise.race

// The simple idea for Promise.race is that the promise which executes first gets returned
// In case of error as well the one rejected first gets returned first

Promise.myPromiseRace = function (promises) {
  return new Promise((resolve, reject) => {
    promises.forEach((singlePromise) => {
      Promise.resolve(singlePromise).then(
        (value) => {
          resolve(value);
        },
        (reason) => {
          reject(reason);
        }
      );
    });
  });
};

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Resolve Promise 1");
  }, 4000);
});

const promise2 = new Promise((resolve, reject) => {
  reject("Error Promise 2");
});

const promise3 = new Promise((resolve, reject) => {
  resolve("Resolve Promise 3");
});

Promise.myPromiseRace([promise1, promise2, promise3])
  .then((data) => {
    console.log("Data is ", data);
  })
  .catch((error) => {
    console.log("Error is ", error);
  });
