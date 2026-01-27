Promise.resolve(1)
  .then(num => {
    console.log(num);
    return num + 1;
  })
  .then(num => {
    console.log(num);
    return Promise.resolve(num + 1);
  })
  .then(num => {
    console.log(num);
  });

console.log(0);



//explanation:
// 1. The first `Promise.resolve(1)` creates a resolved promise with the value `1`.
// 2. The first `.then()` callback is added to the microtask queue and will log `1` and return `2`.
// 3. The second `.then()` callback is added to the microtask queue and will log `2` and return a resolved promise with the value `3`.
// 4. The third `.then()` callback is added to the microtask queue and will log `3`.
// 5. Meanwhile, the synchronous `console.log(0)` executes immediately, logging `0` to the console.
// 6. After the synchronous code completes, the event loop processes the microtasks in order: first logging `1`, then logging `2`, and finally logging `3`.
