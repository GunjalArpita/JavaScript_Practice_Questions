// Given an array of numbers, return the first number whose second occurrence appears first.
// (If no number repeats, return -1)
// Example:
// input:  [2, 5, 1, 2, 3, 5, 1, 2, 4]
// output: 2
// 👉 Explanation:
// // 2 repeats first (its second occurrence comes before others)
// input:  [1, 2, 3, 4]
// output: -1



function check(arr)
{
    let seen = {}    // empty object

    for(let i = 0; i < arr.length; i++)
    {
        if(seen[arr[i]])         // already exists in object
        {
            return arr[i]   // second occurrence found
        }
        else
        {
            seen[arr[i]] = true   // mark this number as seen
        }
    }

    return -1
}

console.log(check([1,2,3,4,5,3])); 
console.log(check([2, 5, 1, 2, 3, 5, 1, 2, 4]));
console.log(check([1, 2, 3, 4]));
