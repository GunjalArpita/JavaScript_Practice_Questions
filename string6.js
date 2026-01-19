function findNonRepeatedChar(str) {
    const charCount = {};
    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }   
    for (let char of str) {
        if (charCount[char] === 1) {
            return char;
        }
    }
    return null;
}
// Example usage:
console.log(findNonRepeatedChar("swiss"));
// Output: "w"console.log(findNonRepeatedChar("repeater"));
// Output: "r"  
console.log(findNonRepeatedChar("aabbcc"));
// Output: null
console.log(findNonRepeatedChar("hello world"));
// Output: "h"
