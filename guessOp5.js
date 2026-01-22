const obj = {
  name: "JS",
  show: function () {
    console.log(this.name);
  }
};

const fn = obj.show;
fn();
//undefined
//show() works only when called through obj