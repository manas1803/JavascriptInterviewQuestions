// Explain all promise APIs

// 1. Promise.all :- returns all promises 

// Case 1 All promises are fulfilled and resolved. In that case it will wait till all the promises have resolved.
// In this example we get output after 4s
const promise1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Resolve Promise 1")
    },4000)
})

const promise2 = new Promise((resolve,reject)=>{
    resolve("Resolve Promise 2")
})

const promise3 = new Promise((resolve,reject)=>{
    resolve("Resolve Promise 3")
})

Promise.all([promise1,promise2,promise3]).then((data)=>{
    console.log("Data is ",data)
})

// Case 2 Some promise fails and gets rejected
// In this scenario since one of the promise got rejected it will throw error immediately
// It will not wait to success of other promises

const promise11 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Resolve Promise 1")
    },4000)
})

const promise21 = new Promise((resolve,reject)=>{
    reject("Rejected Promise 2")
})

const promise31 = new Promise((resolve,reject)=>{
    resolve("Resolve Promise 3")
})

Promise.all([promise11,promise21,promise31]).then((data)=>{
    console.log("Data is ",data)
}).catch((error)=>{
    console.log("Error is ",error)
})

// 2. Promise.allSettled
// This is similar to all, with couple of differences
// firstly it returns an object with status and value/reason
// second it returns value for resolved,rejected all types of promises
// So we get result for all

Promise.allSettled([promise11,promise21,promise31]).then((data)=>{
    console.log("Data is ",data)
}).catch((error)=>{
    console.log("Error is ",error)
})

// 3. Promise.race
// This api of promise is basically a race condition, the promise that wins first gets returned even if it fails, but it will execute all the promises, it only returns the one that wins the race condition

Promise.race([promise11,promise21,promise31]).then((data)=>{
    console.log("Data is ",data)
}).catch((error)=>{
    console.log("Error is ",error)
})

// 4. Promise.any
// This api is exactly same as race api 
// The only difference is that it returns only the fulfilled/resolved promises 

Promise.any([promise11,promise21,promise31]).then((data)=>{
    console.log("Data is ",data)
}).catch((error)=>{
    console.log("Error is ",error)
})