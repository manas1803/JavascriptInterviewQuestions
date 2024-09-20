## JS Interview questions


## Understanding Map,Filter and Reduce

### Array.map()

The method `array.map()` returns a new array that is of the same length as the original array with modified value based on some condition. The condition is added in a callback function

Map doesn't change the size of array, and it returns a completely new array to us. Lets take an example to understand

## Example

```js
const arr = [1,2,3,4,5,6]
const multiplyByTwo = (element,index)=>{
    return element*2;
}
const formattedArray = arr.map(multiplyByTwo);


// Output is 
//[2,4,6,8,10,12]
```

From the above example we can see how map works.
> In place of creating a new function each time, we can simple have a annonymus callback function inside map

Now lets create our own `map` function and to create that lets break down `Array.map()`

1. `Array.map` loops through the whole array.
2. `Array.map` takes in a callback function, which has params as `currentElement`, `index` and the `array` itself
3. The `currentElement` and the `array` is the array to which map is applied using `.` (dot) operator
4. So we can access the array using `this` keyword.
5. `Array.map` returns a new array to us
6. The values inside the new array is as a result of value returned by `callback` function.

```js
Array.prototype.myMap = function(callback){
    let returnedArray = []
    for(let index=0;index<this.length;index++){
        returnedArray.push(callback(this[index],index,this))
    }
    return returnedArray
}
```
> Lets not worry about Array.prototype here, just think of it as syntax required