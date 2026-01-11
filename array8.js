// Question:
// Write a JavaScript function that takes an array of numbers and returns true if the array is sorted in ascending order, otherwise returns false.
// Example:
// isSorted([1, 2, 3, 4, 5])    // true
// isSorted([1, 3, 2, 4])      // false
// isSorted([5])               // true

// 📌 Rules:
// Use a loop
// Do not use sort()
// Return true or false
// Empty or single-element array should return true

function arrayNum(arr)
{   
    if(arr.length<=1)
    {
        return true
    }
    for(let i=0;i<arr.length;i++)
    {  
        
        if(arr[i]>arr[i+1])
        {
            return false
        }
       
    }
    return true
}
console.log(arrayNum([]));
console.log(arrayNum([5]));
console.log(arrayNum([1,2,3,4,5]));
console.log(arrayNum([5,4,3,2,1]));
console.log(arrayNum([1,4,7,4,2]));

