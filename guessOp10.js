const obj1 = { a: 1 };
const obj2 = obj1;

obj2.a = 5;

console.log(obj1.a);
console.log(obj2.a);


// obj2 does NOT create a copy
// Both point to the same object in memory
//Objects are assigned by reference, not by value

//oputput:
//5
//5