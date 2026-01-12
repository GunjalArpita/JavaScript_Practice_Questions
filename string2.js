function count(str)
{    
    let vowels="AaeEiIoOuU"
    let count=0
    for(let i=0;i<str.length;i++)
    {
         if(vowels.includes(str[i]))
         {
              count++
         }
    }
    return count
}
console.log(count("Arpita"));
console.log(count('aba'));
console.log(count('xyz'));

