function printObjValues(state,country){
    console.log(`My name is ${this.firstName} ${this.lastName} and I live in ${state} and my country is ${country}`)
}

const obj1 = {
    firstName:"Bruce",
    lastName:"Wayne"
}

const obj2 = {
    firstName:"Clark",
    lastName:"Kent"
}

const printedValueForObj1 = printObjValues.call(obj1,"Gotham","DC")
const printedValueForObj2 = printObjValues.apply(obj2,["Metropolis","DC"])

// The major difference between call and apply is the way parameters are passed
// Call - , separated
// Apply as array
// Bind it is similar to call on regards to the syntax but the major difference is that it does not call the original function, but creates a new copy of the same function and returns it
// We can then call that function

const funcPrintedValueForObj1 = printObjValues.bind(obj1,"Gotham","DC")
const funcPrintedValueForObj2 = printObjValues.bind(obj2,"Metropolis","DC")

funcPrintedValueForObj1()
funcPrintedValueForObj2()