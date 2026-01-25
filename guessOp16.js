console.log("A");

setTimeout(() => console.log("B"), 0);

Promise.resolve().then(() => console.log("C"));

console.log("D");


//“Promises run before setTimeout because microtasks have higher priority.”

// A
// D
// C
// B