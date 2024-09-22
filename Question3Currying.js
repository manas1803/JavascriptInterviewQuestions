// Implement currying and infinite currying as well
// Example Find volume of a cuboid volume(1)(2)(3) 
// Example Find sum of n numbers till end is reached sum(1)(2)(3)(4)(5)(6)()


function calculateVolume(length){
    return function(breadth){
        return function(height){
            return length*breadth*height;
        }
    }
}

const volume = calculateVolume(2)(3)(5)
console.log("Volume is ",volume)


function sum(num){
    return function(num2){
        if(!num2){
            return num;
        }
        return sum(num+num2)
    }
}

const infiniteSum = sum(1)(2)(3)(4)(5)(6)()
console.log("Sum is ",infiniteSum)