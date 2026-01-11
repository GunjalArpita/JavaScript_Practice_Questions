// Write a JavaScript function that takes a string as input and returns the character that appears the maximum number of times.
// Example:
// maxChar("javascript")   // Output: "a"
// maxChar("abbccc")       // Output: "c"

//  Rules:
// Use loops only
// Do not use map, reduce, or built-in frequency helpers
// Return the character (not the count)
// If multiple characters have the same max count, return the first one

function maxChar(str)
{
    let maxCount = 0;
    let result = '';

    for (let i = 0; i < str.length; i++)
    {
        let count = 0;

        for (let j = 0; j < str.length; j++)
        {
            if (str[i] === str[j])
            {
                count++;
            }
        }

        if (count > maxCount)
        {
            maxCount = count;
            result = str[i];
        }
    }

    return result;
}

console.log(maxChar("aabbaa"));    // a
console.log(maxChar("bbbbbaaaa"));  // b
console.log(maxChar("abcde"));    // a