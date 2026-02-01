//check if array is rotated sorted
// [3,4,5,1,2] → true
// [1,2,3,4,5] → true
// [2,1,3,4]   → false


function isRotatedSorted(arr) {
    let count = 0;

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            count++;
        }
    }

    // circular check: last vs first
    if (arr[arr.length - 1] > arr[0]) {
        count++;
    }

    return count <= 1;
}

console.log(isRotatedSorted([3,4,5,1,2])); // true
console.log(isRotatedSorted([1,2,3,4,5])); // true
console.log(isRotatedSorted([2,1,3,4]));   // false
