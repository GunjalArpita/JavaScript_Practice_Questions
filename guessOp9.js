const a = [1, 2, 3];

const b = [...a];
b.push(4);

console.log(a);
console.log(b);

// [1, 2, 3]
// [1, 2, 3, 4]
// Here, b is a shallow copy of a created using the spread operator (...).
// Therefore, modifying b does not affect a.

// Spread operator creates a new array
// b.push(4) changes only b
// a stays untouched