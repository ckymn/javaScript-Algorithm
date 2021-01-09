let arr = ["Apple","Orange","Pear"];

//bad
for (let i = 0; i <arr.length; i++) {		
	console.log(arr[i]);
}
//--> Apple , Orange , Pear


//good
arr.map(item => console.log(item));
//--> Apple ,Orange ,Pear


//best good
for (item of arr) {
	console.log(item);
}
//--> Apple ,Orange ,Pear


//best good
arr.forEach(item => console.log(item));
//-->Apple ,Orange,Pear

//====================================================================

let fruit = []
console.log(fruit.length);
//-->0

fruit[30]="Muhammet";
console.log(fruit.length);//31
//-->31


let fruit2 = [1,2,3,4,5,6,7];
console.log(fruit2.length);
//-->7

fruit2.length = 2;
console.log(fruit2);
//-->[1,2]

fruit2.length = 5;
console.log(fruit2[3]);//[1,2,<3 epty items>]
// -->undefined

console.log(2 ==2 );//true
console.log([] == []);//false
console.log([] === []);//false

console.log([0] === [0]);//false
console.log(0 == []);//true
console.log('0' == []);//false

console.log('0' == '');//false
console.log( 0== '');//true


let arr2 = ["a","b"];
arr2.push(function(){
	console.log(this);
})

arr2[2]();

//======================================================
const sumInput = ()=>{
	let numbers =[];
	while(true){
		let value = prompt("A number please ? ",0);

		if (value === "" || value === null || !isFinite(value)) break;

		numbers.push(+value);
	}
	let sum = 0;
	for (number of numbers) {
		sum += number;
	}
	return sum;
}
console.log(sumInput());