// Common array methods
// splice,slice,split,unshift,shift


const arr = [1,2,3,4,5,6,7,8,9,10]

// 1. Slice
// creates a copy 
const slicedArray = arr.slice()
console.log("Sliced array is ",slicedArray)

// 2. Splice
// Modifies the existing array and returns the values that are spliced

const arrayForSplice = arr.slice()
const splicedValues = arrayForSplice.splice(0)
console.log("spliced values are ",splicedValues)
console.log("Array for splice is ",arrayForSplice)

// 3. Split 
// Splits the given string data type based on the parameter provided and returns an array

const str = "My name is Manas Pant"
const splitedArray = str.split(" ")
console.log("Splitted string is ",splitedArray)
