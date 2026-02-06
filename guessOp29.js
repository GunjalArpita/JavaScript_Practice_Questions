let x = 5;

(function () {
    console.log(x);
    let x = 10;
})();


//ReferenceError: Cannot access 'x' before initialization

// let x is block-scoped
// It exists in Temporal Dead Zone (TDZ)
// Accessing x before declaration → ❌ ReferenceError
// Outer x = 5 is NOT used because inner let x shadows it