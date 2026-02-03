function checkAnagram(str1,str2)
{
    let count={};
    if(str1.length!==str2.length)
    {
        return false;
    }
    for(let i=0;i<str1.length;i++)

        {
           if(count[str1[i]]==undefined)
           {
            count[str1[i]]=1;
           }
           else{
            count[str1[i]]++
           }
        }

        for(let i=0;i<str2.length;i++)
        {
            if(count[str2[i]]===undefined  || count[str2[i]]===0)
            {
                return false;

            }
            else
            {
                count[str2[i]]-=1;
            }
 
        }
        return true;
}

console.log(checkAnagram("listen","silent"));
console.log(checkAnagram("hello","world"));

//true
//false

