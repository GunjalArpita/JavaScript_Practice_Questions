for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0);
}


// var is function-scoped, NOT block-scoped
// Only one i exists// setTimeout runs after the loop finishes
// Loop finishes with i = 3
// So all callbacks print the same final value 👉 3

// 3
// 3
// 3