// Create polyfill for map,filter and reduce functions

const arr = [
  {
    id: "1",
    firstName: "Bruce",
    lastName: "Wayne",
    nickName: "batman",
    superpower: "rich",
  },
  {
    id: "2",
    firstName: "Clark",
    lastName: "Kent",
    nickName: "superman",
    superpower: "power and strength",
  },
  {
    id: "3",
    firstName: "Princess",
    lastName: "Diana",
    nickName: "wonderwoman",
    superpower: "lassos and strength",
  },
  {
    id: "4",
    firstName: "Barry",
    lastName: "Allen",
    nickName: "flash",
    superpower: "speed",
  },
  {
    id: "5",
    firstName: "Harquen",
    lastName: "Queen",
    nickName: "harleyqueen",
    superpower: "insane",
  },
  {
    id: "6",
    firstName: "Oliver",
    lastName: "Queen",
    nickName: "green arrow",
    superpower: "bow and arrow",
  },
];

function getRandomNumber(index) {
    return Math.random() * (5 - 1) + index;
  }

// Return an array with all objects in arr having a new key value as rating and give some random rating

Array.prototype.myMap = function(callback){
    const returnedArray=[]
    for(let index=0;index<this.length;index++){
        returnedArray.push(callback(this[index],index,this))
    }
    return returnedArray;
}

const ratedSuperheros = arr.myMap((superhero,index)=>{
    return{
        ...superhero,
        rating:getRandomNumber(index)
    }
})

console.log("Rated superheros are ",ratedSuperheros)

// Filter out the superheros that have rating more than 5

Array.prototype.myFilter = function(callback){
    const filteredArray = []
    for(let index=0;index<this.length;index++){
        if(callback(this[index],index,this)){
            filteredArray.push(callback(this[index],index,this))
        }
    }
    return filteredArray;
}

const ratedSuperherosMoreThan5 = ratedSuperheros.myFilter((superhero)=>{
    if(superhero.rating>5) return superhero
})

console.log("More pwerful superheros are ",ratedSuperherosMoreThan5)

// Reduce the more powerful superheros into string of array which will say the name and power of the superhero along with rating

Array.prototype.myReduce = function(callback,initialValue){
    let accumulator = initialValue;
    for(let index=0;index<this.length;index++){
        accumulator = (accumulator) ? callback(accumulator,this[index],index,this) : this[index]
    }
    return accumulator;
}

const ratedHerosStringArray = ratedSuperherosMoreThan5.myReduce((accumulator,currentElement)=>{
    accumulator.push(`The powerful superhero is ${currentElement.nickName} with superpower ${currentElement.superpower} and rating ${currentElement.rating}`)

    return accumulator
},[])

console.log("Powerful superheros string array ",ratedHerosStringArray)