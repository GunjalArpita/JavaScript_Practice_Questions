const data1 = {
  nums: [1, 2, 3],
  value: 10
};

const data2 = { ...data1 };

data2.nums.push(4);
data2.value = 20;

console.log(data1.nums);
console.log(data1.value);
console.log(data2.nums);
console.log(data2.value);


//op
// [ 1, 2, 3, 4 ]
// 10
// [ 1, 2, 3, 4 ]
// 20

// data2.value = 20
// value is a primitive
// Only data2.value changes