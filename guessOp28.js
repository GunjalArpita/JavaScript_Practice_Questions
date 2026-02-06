function outer() {
    let x = 10;
    return function inner() {
        x++;
        console.log(x);
    }
}

let fn1 = outer();
fn1();
fn1();

//op-
//11
//12


// outer() runs once
// x is created once → x = 10
// fn1 keeps closure over x
// Each call remembers & updates the same x

//Closures remember variables even after the outer function has finished execution