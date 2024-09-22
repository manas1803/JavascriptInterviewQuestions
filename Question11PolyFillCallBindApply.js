function printObjValues(state, country) {
  console.log(
    `My name is ${this.firstName} ${this.lastName} and I live in ${state} and my country is ${country}`
  );
}

const obj1 = {
  firstName: "Bruce",
  lastName: "Wayne",
};

const obj2 = {
  firstName: "Clark",
  lastName: "Kent",
};

// Polyfill for call

Function.prototype.myCall = function (obj, ...args) {
  obj = obj || globalThis;
  const uniqueSymbol = Symbol();
  obj[uniqueSymbol] = this;
  return obj[uniqueSymbol](...args);
};

printObjValues.myCall(obj1, "Gotham", "DC");

// Polyfill for apply
Function.prototype.myApply = function (obj, args) {
  obj = obj || globalThis;
  const uniqueIdentifier = Symbol();
  obj[uniqueIdentifier] = this;
  return obj[uniqueIdentifier](...args);
};

printObjValues.myApply(obj1, ["Gotham", "DC"]);

// Polyfill for bind

Function.prototype.myBind = function (obj, ...bindArgs) {
  const fn = this
  return function(...applyArgs){
    return fn.myApply(obj,[...bindArgs,...applyArgs])
  }
};

const bindedPolyFill = printObjValues.myBind(obj1, "Gotham");
bindedPolyFill("DC");
