// burda string bir degri Array turune degistirme islemleri yapar!

let str = "merhaba arkadaslar bugun split metodu kullanimini goruceksiniz!";

const strToArray = str.split(" ");

strToArray.forEach((item) => {
  console.log(item); //siralama islmelerini goruceksiniz!
});

console.log("-------------------------------------");

console.log("-------------------------------------");


strToArray.map((item) => {
	console.log(item);
});

console.log("-------------------------------------");

const newstr = strToArray.reduce((acc,item) =>{
	if (!acc.includes(item)) {
		acc.push(item);
	}
	return acc;
},[]);
console.log(newstr);// burda degerinizi [] icerisinde donecektir
console.log("-------------------------------------");

//==================================================

const strToJoin = str.split(" ").join(",");

console.log( typeof strToJoin);//string: merhaba,arkadaslar,bugun....

console.log("---------------------------------------");

//===================================================

let arr =[1,2,3,4,5];
const strToConcat = str.concat(arr);

console.log(typeof strToConcat);//string .....goruceksiniz!1,2,3,4,5
