console.log(test());

function test() {
  return 10;
}

console.log(test());

var test = function () {
  return 20;
};

console.log(test());


// 10
// 10
// 20

//var test; // ignored because function already exists

// | Rule                 | Truth                  |
// | -------------------- | ---------------------- |
// | Function declaration | Fully hoisted          |
// | `var`                | Hoisted as `undefined` |
// | Function > var       | Function wins          |
// | Assignment           | Happens at runtime     |

// First console.log calls the hoisted function declaration
// Second console.log still calls the hoisted function declaration
// Third console.log calls the variable 'test' which is now assigned to the function expression returning 20
