let user = {
  name: "Arpita",
  sayName: function () {
    console.log(this.name);
  }
};

let say = user.sayName;
say();


//op-undefined

// Function is called alone, not as user.sayName()
// So this is NOT user
// In normal JS (non-strict), this → global object
// global.name doesn’t exist → undefined

//this depends on how a function is called, not where it is defined.