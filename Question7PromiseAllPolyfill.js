// Create polyfill for Promise all api

// The idea is very simple
// 1. Promise all returns a promise that has all the promises given to it executed
// 2. If all the promises are fulfilled with no issues it returns a promise that have resolved data of all promises
// 3. If any single promise fails, it immdediately throws the rejection and the error, other promises will be executed but no output(This means if there is some time taking for other promises then that will still execute)

Promise.myPromiseAll = function (promises) {
  return new Promise((resolve, reject) => {
    const results = [];
    let completedPromises = 0;

    if (promises.length === 0) {
      resolve(results);
    }

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


const promise1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Resolve Promise 1")
    },4000)
})

const promise2 = new Promise((resolve,reject)=>{
    reject("Resolve Promise 2")
})

const promise3 = new Promise((resolve,reject)=>{
    resolve("Resolve Promise 3")
})

Promise.myPromiseAll([promise1,promise2,promise3]).then((data)=>{
    console.log("Data is ",data)
}).catch((error)=>{
    console.log("Error is ",error)
})