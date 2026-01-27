Promise.resolve()
  .then(() => {
    console.log(1);
    return Promise.resolve(2);
  })
  .then(console.log);

console.log(3);


//op- 3 2 1
// | Step        | Output |
// | ----------- | ------ |
// | Sync        | `3`    |
// | Microtask 1 | `1`    |
// | Microtask 2 | `2`    |


// Explanation: 
// 1. The first `Promise.resolve()` creates a resolved promise.
// 2. The first `.then()` callback is added to the microtask queue and will log `1` and return a resolved promise with the value `2`.
// 3. The second `.then(console.log)` is also added to the microtask queue and will log the value passed to it, which is `2`.
// 4. Meanwhile, the synchronous `console.log(3)` executes immediately, logging `3` to the console.
// 5. After the synchronous code completes, the event loop processes the microtasks in order: first logging `1`, then logging `2`.