//let switchFunc = add;
//switchFunc=sub
 switchFunc=mult
// switchFunc=div


   function add()
        {
            let sum= 1+2;
            console.log(sum);
            
        }
        function sub()
        {
            let sub= 6-3;
            console.log(sub);
            
        }
         function mult()
        {
            let mult= 4*5;
            console.log(mult);
            
        }
  function div()
        {
            let div= 10/2;
            console.log(div);
            
        }
switch (switchFunc) {
    case add:add()
        
        break;

        case sub:sub()
        
        break;

        case mult:mult()
        
        break;

        case div:div()
        
        break;

    default: console.log("nothing");
    
        break;
}



