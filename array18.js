// Question:
// Ek function likho jo array ka second smallest element return kare.
// 👉 Assume karo:
// array me at least 2 elements honge
// elements distinct hain
// Example:
// secondSmallest([4, 1, 7, 3, 9])   // 3
// secondSmallest([10, 5])          // 10
// secondSmallest([8, 2, 6, 4])     // 4


function secondSmallest(arr) {
    // Pehle array ko sort karte hain
    arr.sort(function(a, b) {
        return a - b;
    });
    // Fir second smallest element return karte hain
    return arr[1];
}
// Test cases
console.log(secondSmallest([4, 1, 7, 3, 9]));
console.log(secondSmallest([10, 5]));
console.log(secondSmallest([8, 2, 6, 4]));