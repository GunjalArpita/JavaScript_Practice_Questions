let a = 10;

function demo() {
  console.log(a);
  let a = 20;
  console.log(a);
}

demo();

//ReferenceError: Cannot access 'a' before initialization

// Inside demo(), let a creates a new block-scoped variable

// This a is in Temporal Dead Zone (TDZ) from start of function

// Until let a = 20 runs, you cannot access a

// So JS throws ReferenceError immediately

// Code stops, second console.log never runs