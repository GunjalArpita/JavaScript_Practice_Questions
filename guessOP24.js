for (var i = 1; i <= 3; i++) {
    setTimeout(function () {
        console.log(i);
    }, 1000);
}

//4 4 4
//check until i==3 then at 4 condition became false and then setTimeout (call back function)
//is called,it will execute all loop at once,so iit will print 4 4 4