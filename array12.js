function small(arr)
{
    let smallest=arr[0]
   for(let i=0;i<arr.length;i++)
   {
    if(arr[i]<smallest)
    {
        smallest=arr[i]
    }
   }
   return smallest
} 
console.log(small([1,2,3,4,5]));
console.log(small([11,5,77,99]));

