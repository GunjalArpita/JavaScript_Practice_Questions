function check(arr)
{
    for(let i=0;i<arr.length;i++)
    {
       for(let j=0;j<arr.length;j++)
       {
        if(i!==j && arr[i]===arr[j])
            {
               return true
            }
        
       }
    }
    return false
}
console.log(check([1,2,3,44,1]));
console.log(check([1,2,3,4]));
