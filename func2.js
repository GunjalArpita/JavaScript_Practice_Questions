// write a javascript function that takes a string as input and return the count of vowels in the string ex- "arpita" - 3
//Javascript-3
//condition-function should return count,do not use regex,consider both uppercase and lowercase vowels  


function vowelCount(str)
{
    let count = 0
    let vowels="aeiouAEIOU" 
    for(let i=0;i<str.length;i++)
    {
        if(vowels.includes(str[i]))
        {
            count++
        }
    }
    return count
}   
console.log(vowelCount("arpita"));
console.log(vowelCount("Javascript"));
console.log(vowelCount("HELLO"));

//another easy way but longer code

function vowelCount2(str)
{
    let count = 0           
    for(let i=0;i<str.length;i++)
    {
        if(str[i]=='a' || str[i]=='e' || str[i]=='i' || str[i]=='o' || str[i]=='u' || str[i]=='A' || str[i]=='E' || str[i]=='I' || str[i]=='O' || str[i]=='U')
        {
            count++
        }       
    }
    return count
}
console.log(vowelCount2("arpita"));
console.log(vowelCount2("Javascript"));
console.log(vowelCount2("HELLO"));
