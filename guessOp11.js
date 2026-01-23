const obj1 = {
  a: 1,
  b: { c: 2 }
};

const obj2 = { ...obj1 };

obj2.b.c = 5;

console.log(obj1.b.c);
console.log(obj2.b.c);


//Spread creates a shallow copy, nested objects still share reference
//Both obj1.b and obj2.b point to the same object in memory
//So modifying obj2.b.c also affects obj1.b.c

//Output:
//5
//5