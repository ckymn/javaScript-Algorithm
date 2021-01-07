console.log(typeof 0);// number
console.log(typeof new Number(0)); //Object
console.log(typeof Number(0));//number
console.log(typeof +"muhammet")// number
console.log(typeof new Number("0"));//Object


let zero = new Number(0);
if(zero){
	console.log("zero is truthy!! because it's an Object ")
}

console.log(typeof NaN);// number
console.log(typeof Infinity);// number
console.log(typeof -Infinity);// number
console.log(NaN === NaN);//false
console.log(Infinity === Infinity);// true

//isNan(value): argumani string degeri ise "str" or NaN === true 
//isFinite(value):argumani sayi degeri ise 15 or '15' === true

console.log(isNaN(10));// false
console.log(isNaN(NaN));//true
console.log(isNaN("str"));//true
console.log(isNaN(Infinity));//false

console.log(isFinite("15")); //true
console.log(isFinite(15));//true
console.log(isFinite(Infinity));//false

//Object.is(value,value): karsilastirma islemlerine yeni bir soluk

console.log(Object.is(NaN,NaN) === true);//true
console.log(Object.is(0,-0));//false


//parseInt(str) - parseFloat(str)
//parseInt(str,radix)

console.log(+"100");//100
console.log(Number("100"));//100
console.log(+"100px")// NaN
console.log(Number("100px"));//NaN

console.log(parseInt("100px"));//100
console.log(parseFloat("12.5em"));//12.5
console.log(parseInt('0xff',16));//255
console.log(parseInt('ff',16));//255
console.log(parseInt('2n9c',36));//123456