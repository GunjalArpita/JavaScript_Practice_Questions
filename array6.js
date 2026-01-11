// Write a JavaScript function that takes an array of numbers and returns the second largest number.
// Example:
// secondLargest([10, 5, 20, 8])   // Output: 10
// secondLargest([3, 1, 2])       // Output: 2
// 📌 Rules:
// Do not use sort()
// Do not use Math.max()
// Use a loop
// Return the second largest number

function secLargest(arr)
   {
        // let largest=arr[0]
        // let seclargest;
        for(let i=0;i<arr.length;i++)
        {
        for(let j=0;j<arr.length;j++)
        {
            if(arr[i]>arr[j])
            { 
            let temp=arr[i];
            arr[i]=arr[j]
            arr[j]=temp
        }
        }
        }
        console.log(arr);
        console.log(arr[1])
    }
secLargest([1,3,4,5,1,2])
   