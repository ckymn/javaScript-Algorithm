/*
	WeakMap Map'ten farkli olarak Carbage Collector (cop toplayici)'na denk geldiginde 
		gereksiz verileri siler ama Map oyle degeil Map kullaniminda referans yani Map'in
		kendisi silinmedikce carbage collector calismaz !!!
*/

// Object , Function , NaN gibi verileri kabul ederler.

let map = new WeakMap();
const object =[];
map.set(object,"object");

console.log(map.get(object));//object
console.log(map.value())
