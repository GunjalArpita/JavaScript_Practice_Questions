//write a function that takes a string as input and returns the string reversed.
//ex- input-"arpita" o/p-"atipra"
//input-"Hello" o/p-"olleH"

function revString(str)
{   
    let newstr=''
    for(let i=str.length-1;i>=0;i--)
    {
        newstr=newstr+str[i]
    }
    //console.log(newstr)
    return newstr

}
//revString('Hello')
console.log(revString('arpita'))
console.log(revString('Hello World'))
