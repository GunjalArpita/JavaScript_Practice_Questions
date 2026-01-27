async function test() {
  return 5;
}

console.log(test());
//op- Promise { 5 }

// Explanation: 
// 1. The `test` function is declared as an `async` function, which means it always returns a promise.
// 2. When `test()` is called, it returns a promise that resolves to the value `5`.
// 3. The `console.log` statement logs the promise object itself, which is in a pending state at the time of logging, hence the output is `Promise { 5 }`.


//“Async functions always return a Promise, even if we return a normal value