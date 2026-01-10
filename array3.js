// Write a JavaScript function that takes an array of numbers and returns a new array containing only the odd numbers.
// Example:
// Input: [1, 2, 3, 4, 5, 6] → Output: [1, 3, 5]
// Input: [2, 4, 6] → Output: []
// 📌 Rules:
// Use a loop
// Do not use filter()
// Return a new array
// Do not modify the original array

function oddArray(arr)
{
    let oddArr=[]
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]%2!=0)
        {
            oddArr.push(arr[i])
        }
    }
    return oddArr
}

console.log(oddArray([1,2,3,4,5]));
console.log(oddArray([1,3,5,7,9]));

