//write a function that takes an array of numbers and returns the largest number from array.
//input-[3,7,2,9,5]-o/p-9
//input-[-10,-5,-2] o/p- -2
//not use Math.max() , do not sort array , return largest value


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
