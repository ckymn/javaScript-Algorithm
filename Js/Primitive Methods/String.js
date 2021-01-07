
let guestList2 = "Guest: \n *Hanna \n *Pete \n *Civan";
console.log(guestList2);


let guestList = `Guest:
* Hanna
* Pete
* Civan
* Mary
* Mami
`;
console.log(guestList);

console.log("Muhammet".toUpperCase());//MUHAMMET
console.log("MUHAMMET".toLowerCase());//muhammet

console.log("Muhammet"[0].toUpperCase());//M
console.log("Muhammet"[0].toLowerCase());//m

let str = "Width with id";
console.log(str.indexOf("Width"));//0
console.log(str.indexOf("id",2));11

let result = "As sly as a fox, as strong as an ox";
let target = "as";
let post = 0;
// while(true) {
// 	let foundPos = result.indexOf(target,post);
// 	if (foundPos == -1) break;

// 	console.log(`Found at ${foundPos}`);
// 	return post = foundPos +1;
// }
// console.log(post);

while((post = str.indexOf(target,post+1) != -1)){
	console.log(post)
}	

// ~
let execution = "Widget";
console.log(~execution);//-1

if (~execution.indexOf("Widget")) {
	console.log("Calisiyor...")
}// +1



//str.substring(start [,end])

let str2 = "stringfy";
console.log(str2.substring(2,6));//ring
console.log(str2.substring(6,2));//ring

//str.slice(start,end)
console.log(str2.slice(2,6));//ring
console.log(str2.slice(6,2));//""

//str.substr(start,[length])
console.log(str2.substr(2,4));//ring
console.log(str2.substr(-4,2));//ng


