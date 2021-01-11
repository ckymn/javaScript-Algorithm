const name =  ["a","b","d","k"];

name.push("a");

for (item of name) {
	
	console.log(item);
}

const deger = name.find(el => el === "a")
console.log(deger);//a

name.splice(2, 1);
console.log(name);//[a,b,k,a]

