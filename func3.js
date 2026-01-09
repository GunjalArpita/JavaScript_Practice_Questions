function maxArray(arr)
{   
    let max=arr[0]
    for(let i=0;i<arr.length;i++)
    {
         if(arr[i]>=max)
         {
            max=arr[i]
         }
    }
    console.log(max);
    
}
maxArray([-1,-3,-5,-7,-88]);
maxArray([1,3,6,-3,99,0,1])
