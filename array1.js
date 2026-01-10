// Question:
// Write a JavaScript function that takes an array of numbers and returns the sum of all elements.
// Example:
// Input: [1, 2, 3, 4] → Output: 10
// Input: [5, 10] → Output: 15
// 📌 Rules:
// Use a loop
// Do not use reduce()
// Return the sum



function arraySum(arr)
{
    let sum=0;
    for(let i=0;i<arr.length;i++)
    {
        sum+=arr[i]
    }
    return sum
}

console.log(arraySum([1,2,3,4]));
console.log(arraySum([1,1,1,1,1]));
