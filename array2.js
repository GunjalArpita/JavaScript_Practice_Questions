// Question:
// Write a JavaScript function that takes an array of numbers and returns the count of even numbers in the array.
// Example:
// Input: [1, 2, 3, 4, 6] → Output: 3
// Input: [7, 9, 11] → Output: 0
// 📌 Rules:
// Use a loop
// Do not use filter()
// Return the count



function evenCount(arr)
{
    let count=0;
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]%2==0)
        {
            count+=1
        }
    }
    return count
}
console.log(evenCount([1,2,3,4,5,6,7,8]));
console.log(evenCount([2]));
