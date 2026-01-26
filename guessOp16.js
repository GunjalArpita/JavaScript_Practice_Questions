console.log("A");

setTimeout(() => console.log("B"), 0);

Promise.resolve().then(() => console.log("C"));

console.log("D");


//“Promises run before setTimeout because microtasks have higher priority.”

// A
// D
// C
// B

//hint- what is the order of execution for synchronous code, microtasks (like Promises), and macrotasks (like setTimeout)?
// Synchronous code runs first, followed by microtasks, and finally macrotasks.
// The correct order of output will be:
// 1. "A" (synchronous)
// 2. "D" (synchronous)
// 3. "C" (Promise microtask)
// 4. "B" (setTimeout macrotask)
// Therefore, the output will be:
// A
// D
// C
// B