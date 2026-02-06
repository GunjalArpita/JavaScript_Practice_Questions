let arr = [1, 2, 3];

let a = arr.map(x => x * 2);
let b = arr.forEach(x => x * 2);

console.log(a);
console.log(b);


//op-2 4 6
//undefined

//map()
// 👉 returns a NEW array
// 👉 transformation ke liye use hota hai

// forEach()
// 👉 kuch return nahi karta
// 👉 sirf loop chalata hai
// 👉 always returns undefined

//map returns a new array, forEach returns undefined.”