//let a = 10;    //in code,commented because it gives error

{
  var a = 20;
  console.log(a);
}

console.log(a);

//SyntaxError: Identifier 'a' has already been declared
// The error occurs because 'a' is declared with 'let' in the outer scope,
// and then attempted to be redeclared with 'var' in the inner block scope.
// In JavaScript, you cannot redeclare a variable in the same scope or in a nested scope
// if it was declared with 'let' or 'const'.