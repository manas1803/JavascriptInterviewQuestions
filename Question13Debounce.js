/**
 * Debounce is basically a function, that returns another function which gets executed
 * Debounce function is basically a magic place where when you pass a normal function(the callback)
 * It gets returned as debounced
 * The callback function is the function that has our logic code
 * Delay is the time we need
 * And we create a debounce function of our own considering facts like the number of arguments etc
 */


const input = document.querySelector("input");

const pDefault = document.querySelector(".default");
const pDebounce = document.querySelector(".debounce");

input.addEventListener("input", (event) => {
  pDefault.textContent = event.target.value;
  updateText(event.target.value);
});

const updateText = debounce((text) => {
  pDebounce.textContent = text;
});

function debounce(callback, delay = 1000) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      callback(...args);
    }, delay);
  };
}
