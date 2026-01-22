// If we use let instead of var → output becomes 0 1 2
//"var creates one shared variable, so all callbacks see the final value."

for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 0);
}
// Expected output:
// 3
// 3
// 3

//using let
for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 0);
}

//` Expected output:
// 0
// 1
// 2