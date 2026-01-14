// Ek function likho jo array me missing number find kare.

// 👉 Array me numbers 1 se N tak hone chahiye
// 👉 Ek number missing hai

// Example:
// findMissing([1, 2, 4, 5])        // 3
// findMissing([2, 3, 1, 5])        // 4
//findMissing([1])               


function  check(arr)
{
    let sum=0
    let n=arr.length+1
    let missing=0
    let expectedSum=n*(n+1)/2
    for(let i=0;i<arr.length;i++)
    {
        sum=sum+arr[i]
    }
    
    missing=expectedSum-sum
    return missing
}
console.log(check([1,2,3,5]));
console.log(check([1]));
console.log(check([1,2,3,4,6,7]));


