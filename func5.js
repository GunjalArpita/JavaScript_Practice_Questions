// Question:
// Write a JavaScript function that takes a number as input and returns true if the number is a palindrome, otherwise returns false.
// Example:
// Input: 121 → Output: true
// Input: 123 → Output: false
// 📌 Rules:
// Do not convert the number to a string
// Use only mathematical operations
// Return true or false

function isPalindrome(num) {
    if (num < 0) return false; // Negative numbers are not palindromes
    let originalNum = num;   //121
    let reversedNum = 0;      //0 
    while (num > 0) {           //121>0
        let digit = num % 10;     //digit=1 //digit=2 //digit=1  
        reversedNum = reversedNum * 10 + digit;    //reversedNum=0*10+1=1 //reversedNum=1*10+2=12 //reversedNum=12*10+1=121
        num = Math.floor(num / 10);
    }
    return originalNum === reversedNum;
}

// Test cases
console.log(isPalindrome(121)); // true
console.log(isPalindrome(123)); // false
console.log(isPalindrome(0));   // true
console.log(isPalindrome(-121)); // false
console.log(isPalindrome(1221)); // true
