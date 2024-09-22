// Question Find the output of the following

console.log(1);
setTimeout(() => {console.log(2);}, 0);
var promise1 = new Promise((resolve, reject) => {
console.log(3);
resolve('success');
})
promise1.then(() => {
console.log(4);
})
console.log(5);

/**  Solution
callStack = [log(1),new Promise(callback=>log 3),]
Macrotask queue = [setTimeout,] - this will remove last
MicrotaskQueue = [Promise resolve] - Empty this first


Output :- 
1
3
5
4
2
*/

