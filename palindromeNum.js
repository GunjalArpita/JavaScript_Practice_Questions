// Write a JavaScript function that checks whether a given number is a palindrome.
// Condition:
// A palindrome number reads the same forward and backward.
// Example: 121 → palindrome, 123 → not palindrome
// Test cases:
// 121 → true
// 345 → false
// 1001 → true


function check(num)
{
    const strNum = num.toString();
    const reversedStrNum = strNum.split('').reverse().join('');
    return strNum === reversedStrNum;

}
console.log(check(12321));
console.log(check(12345));
