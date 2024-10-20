//- Accept two numbers from user and swap their values

let num1 = +prompt("enter first value a");
let num2 = +prompt("enter second value b");
console.log(`a=${num1} & =${num2} before swapping`);
let temp = num1;
num1 = num2;
num2 = temp;

console.log(`a= ${num1} & b=${num2} after swapping`);

//Swap without using third variable

let a = 2;
let b = 3;
a=a+b;//5
b=a-b;//5-3=2
a=a-b //5-2=3
console.log(a,b);