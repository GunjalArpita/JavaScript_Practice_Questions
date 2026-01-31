function findSum(arr, target)
 {
    for (let i = 0; i < arr.length; i++)
         {
        for (let j = i + 1; j < arr.length; j++)
             {
            if (arr[i] + arr[j] === target)
            {
                return "Elements whose sum equals to " + target + " are => "+ [i, j];   // indices
            }
        }
    }
}

console.log(findSum([1,2,3,4,5,2,3,6], 7)); 


//Given an array and a target number, return indices of two numbers whose sum equals the target.
// twoSum([2, 7, 11, 15], 9)   // [0, 1]
// twoSum([3, 2, 4], 6)       // [1, 2]

//“I used a brute-force approach with two loops, checking pairs once.”
