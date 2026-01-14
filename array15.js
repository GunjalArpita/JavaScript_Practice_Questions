// Ek function likho jo array me sabse zyada baar aane wala element (most frequent element)
//  return kare.

// Example:
// // mostFrequent([1, 2, 2, 3, 3, 3, 4])   // 3
// // mostFrequent(["a", "b", "a", "c", "a"]) // "a"
// Thinking Hint (no solution)
// ek object banao (count store karne ke liye)
// loop chalao aur frequency badhao
// ek variable rakho: maxCount
// jiski count zyada ho, use answer bana do

function mostFrequent(arr)
{
    let countObj = {};
    let maxCount = 0;
    let result;

    // count frequency
    for (let i = 0; i < arr.length; i++)
    {
        let val = arr[i];

        if (countObj[val] === undefined)
        {
            countObj[val] = 1;
        }
        else
        {
            countObj[val]++;
        }

        // track max
        if (countObj[val] > maxCount)
        {
            maxCount = countObj[val];
            result = val;
        }
    }

    return result;
}

console.log(mostFrequent([1, 2, 2, 3, 3, 3, 4]));   // 3
console.log(mostFrequent(["a", "b", "a", "c", "a"])); // "a"




// countObj
// → stores how many times each element appears
// Example: { 1:1, 2:2, 3:3 }
// Loop through array
// If element not in object → set count = 1
// If already present → increase count
// maxCount & result
// Whenever current element count becomes highest
// Update maxCount and store that element in result
// Return result
// → element with highest frequency
