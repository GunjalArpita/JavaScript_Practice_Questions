console.log([] == []);
console.log({} == {});
console.log([] == ![]);


//false
//false
//true

// Arrays are reference types
// Two different arrays → different memory
// Reference comparison → ❌ false

// Same reason: two different objects
// Memory reference differs → ❌ false

// ![] → false
// [] == false
// [] → "" → 0
// false → 0
// 0 == 0 → ✅ true