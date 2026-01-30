function checkFirstNonRep(arr)
{   let count={};
    for(let i=0;i<arr.length;i++)
    {
        if(count[arr[i]]==undefined)
        {
            count[arr[i]]=1;
        }
        else
        {
            count[arr[i]]+=1;
        }
    }
    for(let i=0;i<arr.length;i++)
    {
        if(count[arr[i]]===1)
        {
            return arr[i];
        }
    }
    return undefined;
}

console.log(checkFirstNonRep([1,2,3,2,3]));


// function firstUnique(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         let count = 0;

//         for (let j = 0; j < arr.length; j++) {
//             if (arr[i] === arr[j]) {
//                 count++;
//             }
//         }

//         if (count === 1) {
//             return arr[i];
//         }
//     }
//     return null;
// }

// console.log(firstUnique([1, 2, 3, 2, 3])); // 1
// console.log(firstUnique([1, 1, 2, 2]));    // null
