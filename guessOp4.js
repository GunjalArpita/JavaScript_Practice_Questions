let a = 10;

function demo() {
  console.log(a);
  let a = 20;
  console.log(a);
}

demo();

//ReferenceError: Cannot access 'a' before initialization