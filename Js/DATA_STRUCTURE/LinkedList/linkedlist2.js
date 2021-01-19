r/*
	Daha önce belirtildiği gibi, bir liste düğümü iki öğe içerir
	: veriler (data)
	: sonraki düğüme işaretçi(next). 
	: ilk deger (head)
	: son deger (tail)
	: node = dugum gelen datayi node icerisine atariz
	*/

// listedeki her oge baglantisi icin gereken sinif 
class ListNode {
	constructor(data){
		this.data = data;
		this.next = null;
	}
}
// ozel degeri barindiracak sinif 
class LinkedList{
	constructor(){
		this.head = null;
		this.tail = null
	}
	//listeye eleman eklemeyi tanimliyoruz.
	append = (value) =>{
		const node = new ListNode(value);
		if(!this.head) {
			this.head = node;
		}
		let tail = this.head;
		while(tail.next !== null){
			tail = tail.next;
		}
		tail.next = node;
	}

	//listeye BELIRLI bir yerine eleman eklemeyi tanimliyoruz.
	// insert = (index,value) =>{
	// 	if (index < 0 || index > this.size()) return 

	// 		const node = new ListNode(value);
	// 	let current = this.head;
	// 	let previous;
	// 	if (index === 0) {
	// 		//first position
	// 		node.next = current;
	// 		this.head = node;
	// 	}
	// 	else{
	// 		let i =0;
	// 		while(i++ < index){
	// 			previous = current;
	// 			current = current.next;
	// 		}
	// 		node.next = current
	// 		previous.next = node
	// 	}
	// }

 	//listedeki BELIRLI bir degeri kaldirmak
 	// remove = (index) =>{
 	// 	if((this.head === null) || (index < 0)){
 	// 		console.log(`Index ${index} does not exist in the list...`);
 	// 	}
 	// 	if (index === 0) {
 	// 		//gecici  depolama
 	// 		const data = this.head.data;

 	// 		this.head = this.head.next;
 	// 		return data;
 	// 	}
 	// 	let current = this.head;
 	// 	let previous = null;
 	// 	let i =0;
 	// 	while((current !== null) && (i < index)){
 	// 		previous = current;
 	// 		current = current.next;
 	// 		i++;
 	// 	}
 	// 	if(current !== null){
 	// 		previous.next = current.next;
 	// 		return current.data;
 	// 	}
 	// 	console.log(`Index ${index} does not exist in the list... `)
 	// }

	//listenin düğümlerin sayısını döndürür.
	// size = () =>{
	// 	let count =0;
	// 	let node = this.head;
	// 	if(!node) return 0;
	// 	while((node = node.next)){
	// 		count++;
	// 	}
	// 	return count;
	// }

	//listedeki ogeyi degere gore aramak
	// find = (value) =>{
	// 	let count = 1;
	// 	let node = this.head;
	// 	if (!node) return null;
	// 	while((item = item.next)){
	// 		if (node.value === value) {
	// 			return node;
	// 		}
	// 	}
	// 	return null;
	// }
}

let list = new LinkedList();

list.append("red");
list.append(2);
list.append("yellow");
list.append("green");
list.append(5);
console.log(list);
// for(const color of list){
// 	console.log(color);
// }
// list.size();
// console.log(list);
// console.log(list.get(1));//orange
// console.log(list.find(2));
// console.log(list.remove(3))//yellow
// list.insert(4,"Muhammet");
// list.size();

// const arr1 = [...list.values()];
// const arr2 = [...list];
// console

// console.log("muhamemt");
