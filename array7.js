//Question:
// Write a JavaScript function that takes an array of numbers and returns the first non-repeating element.
// Example:
// firstNonRepeat([9, 4, 9, 6, 7, 4])   // Output: 6
// firstNonRepeat([1, 1, 2, 2, 3])     // Output: 3
// 📌 Rules:
// Use loops only (no map, filter, reduce)
// Return the element (not index)
// If no such element exists, return -1
// Hint (not solution)
// Count how many times each element appears
// Then find the first element with count = 1

function firstNonRepeat(arr)
{
    for(let i = 0; i < arr.length; i++)
    {
        let count = 0;      
        for (let j = 0; j < arr.length; j++)
        {
            if (arr[i] === arr[j])
            {
                count++;
            }
        }   
        if (count === 1)
        {
            return arr[i];
        }
    }
    return -1;
}
console.log(firstNonRepeat([9, 4, 9, 6, 7, 4])); // Output: 6
console.log(firstNonRepeat([1, 1, 2, 2, 3]));     // Output: 3