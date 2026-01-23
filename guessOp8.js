const a = [1, 2, 3];

const b = a;
b.push(4);

console.log(a);
console.log(b);


// [1, 2, 3, 4]
// [1, 2, 3, 4]
// Both a and b reflect the change because arrays are reference types in JavaScript.
// b = a means both point to the same memory
// push() modifies the original array
// “Arrays and objects are passed by reference in JavaScript.”
