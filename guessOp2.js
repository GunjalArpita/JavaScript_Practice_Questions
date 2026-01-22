//Promise callbacks run before setTimeout, even if timeout is 0

console.log("start");

setTimeout(() => {
  console.log("timeout");
}, 0);

Promise.resolve().then(() => {
  console.log("promise");
});

console.log("end");
// Expected output:
// start
// end
// promise
// timeout