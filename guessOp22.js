async function demo() {
  console.log(1);
  await Promise.resolve();
  console.log(2);
}

console.log(3);
demo();
console.log(4);


//op-
// 3
// 1
// 4
// 2

//explanation-
// 1. The first console.log(3) runs immediately.
// 2. The demo function is called, which logs 1.
// 3. The await Promise.resolve() causes the function to pause and yield control back to the event loop.
// 4. The next console.log(4) runs immediately after demo() is called.
// 5. After the current call stack is cleared, the promise resolves, and the code after await (console.log(2)) runs.