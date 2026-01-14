// /Ek function likho jo array me se first non-repeating element return kare.
//  Non-repeating = jo sirf ek baar aaya ho
// Example:
// firstUnique([1, 2, 2, 3, 3, 4])     // 1
// firstUnique([5, 5, 6, 6, 7])        // 7
// firstUnique(["a", "b", "a", "c"])   // "b

function counting(arr)
{
    let counts = {};

    // frequency count
    for (let i = 0; i < arr.length; i++)
    {
        if (counts[arr[i]] === undefined)
        {
            counts[arr[i]] = 1;
        }
        else
        {
            counts[arr[i]]++;
        }
    }

    // find first non-repeating
    for (let i = 0; i < arr.length; i++)
    {
        if (counts[arr[i]] === 1)
        {
            return arr[i];
        }
    }

    return null; // if none found
}

console.log(counting([1,2,3,4,1,2,3,4]));
console.log(counting([1,2,2,3,3,4]));   // 1
console.log(counting([5,5,6,6,7]));     // 7
console.log(counting(["a","b","a","c"])); // b

