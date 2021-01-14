let sum = new Function("a", "b", "return a+b");

console.log(sum(1, 2)); //3

//==========================================

let sayHi = new Function("console.log('Hello Civan')");

sayHi(); //Hello Civan
