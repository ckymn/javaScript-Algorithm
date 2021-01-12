let map = new Map();

map.set("isim", 'ahmet');
map.set("age",21);

console.log(map.get("isim"));//ahmet

console.log(map.has("isim"));//true

map.delete("age");

console.log(map.get("age"));//undefined

console.log(map.size);//1


//========================================

let map1 = new Map([
    ['object','1'],
    ['func'  ,2],
    ['nan' ,[]],
    ['num',{}]
]);

console.log(map1.size)//4

for (key of map1.keys()) {
	console.log(key); //object , func, nan, num
}

for (value of map1.values()) {
	console.log(value);// 1 , 2, [], {}
}

for ([key,value] of map1.entries()) {
	console.log(`${key} : ${value}`)//object : 1 , fun : 2 , nan : [] , num: {} 
}

