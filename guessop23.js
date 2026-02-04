console.log(a);
var a = 10;
console.log(a);

function test() {
    console.log(b);
    let b = 20;
}

test();

//   undefined
//10             ^
//ReferenceError: Cannot access 'b' before initialization
