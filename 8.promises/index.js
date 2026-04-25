const { log } = require("console");

function delayFn(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

console.log("Promise lecture starts ");
delayFn(2000)
  .then(() => log("after 2 seconds resolved"))
  .catch((err) => console.error(err))
  .finally(() => console.log("Promise lecture ends"));
log("This will log before the promise is resolved");


function divideFn(num1, num2) {
  return new Promise((resolve, reject) => {
    log(typeof resolve);
    if (num2 === 0) {
      reject("Cannot divide by zero");
    } else {
      resolve(num1 / num2);
    }
  });
}

divideFn(10, 0)
  .then((result) => log("Result:", result))
  .catch((err) => console.error("Error:", err));
