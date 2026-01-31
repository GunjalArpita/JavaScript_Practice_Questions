//maximum subarray sum

function maxSubArrSum(arr) {
    let maxSum = arr[0];

    for (let i = 0; i < arr.length; i++) {
        let sum = 0;

        for (let j = i; j < arr.length; j++) {
            sum = sum + arr[j];   // same logic: add next element
            if (sum > maxSum) {
                maxSum = sum;
            }
        }
    }

    return maxSum;
}

console.log(maxSubArrSum([1, -3, 2, 1, -1]));  // 3
console.log(maxSubArrSum([1, 2, 3, -2, 5]));   // 9

//another method-


function maxSubArrSum(arr) {
    let currentSum = arr[0];
    let maxSum = arr[0];

    for (let i = 1; i < arr.length; i++) {
        currentSum = Math.max(arr[i], currentSum + arr[i]);
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
}

console.log(maxSubArrSum([1, -3, 2, 1, -1]));   // 3
console.log(maxSubArrSum([1, 2, 3, -2, 5]));    // 9


//maxSum([1, -3, 2, 1, -1]) // 3  (2 + 1)
//op-