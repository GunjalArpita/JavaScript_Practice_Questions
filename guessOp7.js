const obj = {
  name: "JavaScript",
  show: () => {
    console.log(this.name);
  }
};

obj.show();

//undefined