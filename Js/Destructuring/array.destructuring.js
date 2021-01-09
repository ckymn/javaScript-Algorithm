/*
	Javascript'te en cok kullanilan veri yapisi Object ve Array dir.
	Object: Nesneler, veri ogelerini [key,value] halinde depolar,
	Array: Diziler, veri ogelerini sirali bir liste halinde index degerlerine gore depolar.

	Destructuring(seklini bozmak)-Assigment(atama) islemleri ile beraber Array Object 
		kavramlarina ihitayac kalmiycak...
*/

//Array Destructuring

//>>1
let arr1 = ["John" , "Muhammet"];
let [firstName , secondName] = arr1;
console.log(firstName,secondName);

//>>2
let [newName,newSurname] = arr1.map(i => i);
console.log(newName , newSurname);

//>>3
let a = arr1[0];
let b = arr1[1];
console.log(a,b);

//>>4
let [a1, b1, c1] = "abc"; // ["a", "b", "c"]
console.log(a1,b1,c1);
let [one, two, three] = new Set([1, 2, 3]);
console.log(one,two,three);

//>>5
let user = {
  name: "John",
  age: 30
};

// loop over keys-and-values
for (let [key, value] of Object.entries(user)) {
  console.log(`${key}:${value}`); // name:John, then age:30
}

//>>6
let co = new Map();
co.set("name", "John");
co.set("age", "30");

// Map iterates as [key, value] pairs, very convenient for destructuring
for (let [key, value] of co) {
  console.log(`${key}:${value}`); // name:John, then age:30
}


//>>7
let guest = "civan";
let admin = "muhammet";

// Let's swap the values: make guest=Pete, admin=Jane
[guest, admin] = [admin, guest];

console.log(`${guest} ${admin}`)