console.log(typeof 0);// number
console.log(typeof new Number(0)); //Object
console.log(typeof Number(0));//number
console.log(typeof +"muhammet")// number
console.log(typeof new Number("0"));//Object


let zero = new Number(0);
if(zero){
	console.log("zero is truthy!! because it's an Object ")
}