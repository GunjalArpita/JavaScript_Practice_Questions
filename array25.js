function findSol(arr)
{
     let secLast
    for(let i=0;i<arr.length;i++)
    {
        for(let j=0;j<arr.length;j++)
        {
            if(arr[i]>arr[j])
            {
                temp=arr[i];
                arr[i]=arr[j];
                arr[j]=temp
            }
        }
    }
    return arr[1]
    //console.log("Sorted Array : ",arr);
    
}
console.log(findSol([1,4,8,3,1,7,0,3,88,80]));
console.log(findSol([33,34,35,35,37,38,101,103,2,3,5,6]));



//Given an array of numbers, return the second largest number.