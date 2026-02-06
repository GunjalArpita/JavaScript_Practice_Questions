let obj = {
    name: "JS",
    normal: function () {
        console.log(this.name);
    },
    arrow: () => {
        console.log(this.name);
    }
};

obj.normal();
obj.arrow();


//normal is a regular function
// this refers to the object calling it
// this.name → "JS"

// arrow function does NOT have its own this
// It takes this from outside (global scope)
// this.name → undefined