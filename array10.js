// Question:
// Ek function likho jo array ka first aur last element add kare.
// Example:
// sumFirstLast([1, 2, 3, 4])  // output: 5
// sumFirstLast([10])         // output: 20
// 📌 Hint (soft sa):
// arr[0]
// arr[arr.length - 1]
// agar ek hi element ho → double kar do


function add(arr)
{
    let sum=0
    
        if(arr[0]==arr[arr.length-1])    //arr[5-1] ,=arr[4]
        {
            sum=arr[0]*2
        }
        else
        {
            sum = arr[0]+arr[arr.length-1]
        }
    
    return sum
    }

console.log(add([1,2,3,4,5]));
console.log(add([1,2,3,4,5,1]));
