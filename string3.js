// Question:
// Check whether two strings are anagrams of each other.
// 👉 Two strings are anagrams if they contain the same characters with the same frequency, but the order can be different.
// 🧪 Examples:
// areAnagrams("listen", "silent")   // true
// areAnagrams("hello", "world")     // false
// areAnagrams("race", "care")       // true
// 🚨 Interview Constraints:
// Case insensitive
// Ignore spaces
// Do NOT use any library function that directly solves it


// function areAnagrams(str1, str2) {

//     // Step 1: length check
//     if (str1.length !== str2.length) {
//         return false;
//     }

//     // Step 2: empty object
//     let count = {};


//     //in marathi-first string che character sagle bag madhe bharle ani jashe jashe character match hotil second string sobt tashe bag madhun kadhle.

//     // Step 3: count letters of first string
//     for (let i = 0; i < str1.length; i++) {
//         let ch = str1[i];

//         if (count[ch] === undefined) {    //get karaycha asel tr undefined yeil ,  bag madhe nahiye mhanun
//             count[ch] = 1;
//         } else {
//             count[ch] = count[ch] + 1;   //already bag madhe aahe mhanun count 1 ne vadhu
//         }
//     }

//     // Step 4: subtract letters using second string
//     for (let i = 0; i < str2.length; i++) {
//         let ch = str2[i];

//         if (count[ch] === undefined || count[ch] === 0) {
//             return false;
//         } else {
//             count[ch] = count[ch] - 1;
//         }
//     }

//     // Step 5: success
//     return true;
// }

// console.log(areAnagrams("listen", "silent")); // true
// console.log(areAnagrams("hello", "world"));   // false
