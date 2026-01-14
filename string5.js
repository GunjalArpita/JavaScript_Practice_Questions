// Question:
// Ek function likho jo check kare ki string palindrome hai ya nahi.
// 👉 Palindrome = aage se aur peeche se same
// Example:
// isPalindrome("madam")    // true
// isPalindrome("racecar") // true
// isPalindrome("hello")   // false
// isPalindrome("a")       // true



function check(str)
{
    let newstr=str.split("").reverse().join("").toLowerCase()
    str=str.toLowerCase()
    if(str===newstr)
    {
        return true
    }
    else
    {
        return false
    }
}
console.log(check("aba"));
console.log(check("racecar"));
console.log(check("madaM"));
console.log(check("Hello"));



