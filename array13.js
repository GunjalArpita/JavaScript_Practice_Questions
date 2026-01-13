function sortArray(arr)
{
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]>arr[i+1])
        {
            return false
        }
        
    }
    return true
}
console.log(sortArray([1,2,3,4,5]));
console.log(sortArray([5,4,3,6,3]));

