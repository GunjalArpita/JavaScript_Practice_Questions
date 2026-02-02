// function findMissingPositive(arr)
// {    
//      let op;
//     for(let i=0;i<arr.length;i++)
//     {   
       
//         if(arr[i]>=0 && arr[i]!==arr[i+1]+1)
//         {
//              op = arr[i]-arr[i+1]
//         }
       
//     }
//     return op;
// }

// console.log(findMissingPositive([1, 2, 3, 5]));


function findMissingPositive(arr) {
    arr = arr.filter(n => n > 0);   // remove negative & zero

    arr.sort((a, b) => a - b);      // sort array

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== i + 1) {
            return i + 1;
        }
    }

    return arr.length + 1;
}

console.log(findMissingPositive([1, 2, 3, 5]));   // 4
console.log(findMissingPositive([0, -1, 1, 2]));  // 3
console.log(findMissingPositive([3, 4, -1, 1]));  // 2

