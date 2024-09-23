const pThrottle = document.querySelector(".throttle");

input.addEventListener("input", (event) => {
  updateThrottleText(event.target.value);
});

const updateThrottleText = throttle((text) => {
  pThrottle.textContent = text;
});

function throttle(callback, delay = 1000) {
  let shouldWait = false;
  let remainingArgs = null;

  const timeOutFunc = () => {
    if (remainingArgs) {
      callback(...remainingArgs);
      remainingArgs = null;
      setTimeout(timeOutFunc, delay);
    } else {
      shouldWait = false;
    }
  };

  return function (...args) {
    if (shouldWait) {
      remainingArgs = args;
      return;
    }
    callback(...args);
    shouldWait = true;
    setTimeout(timeOutFunc, delay);
  };
}
