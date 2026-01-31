function  findSum(arr,target)
{
    let sum=target;
    let res=[];
    for(let i=0;i<arr.length;i++)
   {
   for(let j=0;i<arr.length;j++)
   {
    if(arr[i]!==arr[j] && arr[i]+arr[j]===sum)
    {
       res.push(arr[i],arr[j])
    }
   }
   }
   return res;

}
console.log(findSum([1,2,3,4,5,2,3,6]),7);
