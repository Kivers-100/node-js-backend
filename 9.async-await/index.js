function delayFn() {
  return new Promise((resolve) => setTimeout(resolve, 5000));
}

async function delayedGreet(name) {
  await delayFn();
  console.log(name);
}

delayedGreet("Kivers Dube");

async function divisionFn(num1, num2) {
  try {
    if (num2 === 0) {
      throw new Error("Cannot divide by zero");
    }
    return num1 / num2;
  } catch (error) {
    console.error("error", error.message);
    return null;
  }
}

async function mainFn(){
    console.log(await divisionFn(10, 2));  
    console.log(await divisionFn(10, 0));  
}

mainFn();