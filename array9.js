// Question:
// Write a JavaScript function that takes an array of numbers and returns the longest increasing subarray (continuous).
// Example:
// longestIncSubarray([1, 2, 3, 2, 3, 4, 5, 1])  
// // Output: [2, 3, 4, 5]
// longestIncSubarray([5, 4, 3, 2])  
// // Output: [5]
// 📌 Rules:
// Subarray must be continuous. Use loops only .Do not use sort() ,If multiple answers exist, return the first one
// If no increasing sequence, return array with first element


function longestIncSubarray(arr)
{
    // If array has 0 or 1 element
    if (arr.length <= 1)
    {
        return arr;
    }

    let longest = [];
    let current = [];

    for (let i = 0; i < arr.length; i++)
    {
        // Always add current element
        current.push(arr[i]);

        // If sequence breaks OR last element reached
        if (i === arr.length - 1 || arr[i] >= arr[i + 1])
        {
            // Check if current is longer than longest
            if (current.length > longest.length)
            {
                longest = current;
            }

            // Reset current for next sequence
            current = [];
        }
    }

    return longest;
}

console.log(longestIncSubarray([1, 2, 3, 2, 3, 4, 5, 1]));
console.log(longestIncSubarray([5, 4, 3, 2]));
