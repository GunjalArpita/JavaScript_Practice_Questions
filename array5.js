//Question:
// Write a JavaScript function that takes an array of numbers and returns how many elements are greater than a given number x.
// Example:
// countGreater([1, 5, 3, 7, 2], 3)  // Output: 2
// countGreater([10, 20, 30], 15)   // Output: 2
// 📌 Rules:
// Function should take two parameters: array and number x
// Use a loop
// Do not use filter()
// Return the count

function greaterCount(arr,num)
{
    let count=0
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]>num)
        {
            count++
        }
    }
    return count + " elements are greater than " + num
}

console.log(greaterCount([1,2,3,4,5,6,7,8,9],4));
console.log(greaterCount([1,2,1,1,1,1],2));


