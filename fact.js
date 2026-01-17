
//1. simple logic-  

    let f=1
    let num=5
    for(let i=1;i<=num;i++)
    {
       f=f*i
    }
console.log(f);


//2. Using Function -

function factorial(num)
{
    let fact=1;
    for(let i=1;i<=num;i++)
    {
        fact=fact*i
    }
    return "Factorial of number "+ num + " is "+ fact
}
console.log(factorial(5));

//3.using recursive function -

function factorial(num) {
	if (typeof num !== 'number' || !Number.isInteger(num)) {
		throw new TypeError('factorial requires an integer');
	}
	if (num < 0) {
		throw new RangeError('factorial is not defined for negative numbers');
	}
	if (num === 0 || num === 1) {
		return 1;
	}
	return num * factorial(num - 1);
}

console.log(factorial(5)); // expected output: 120

//4.using while loop

let i=1;
let fact=1
let n=5
while(i<=n)
{
    fact=fact*i;
    i++;
}
console.log(fact);





