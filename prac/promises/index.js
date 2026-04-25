function promiseExample() {
  return new Promise(resolve => {
    (resolve, setTimeout(() => resolve("Promise resolved!"), 2000));
  });
}
