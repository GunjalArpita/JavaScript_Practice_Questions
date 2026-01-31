function move(arr)
{
    let res=[];
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]!==0)
        {
            res.push(arr[i]);
        }
    }
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]===0)
        {
            res.push(arr[i]);
        }
    }
    
    return res
}
console.log(move([1,0,2,0,4,3,0,5]));