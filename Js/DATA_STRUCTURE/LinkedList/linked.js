class Node {
	constructor(data,next){
		this.data = data;
		this.next = next;
	}
}

class LinkedList{
	constructor(){
		//baslangic girisi
		this.head = null;
	}
}

LinkedList.prototype.insertFirstData = function(data){
	let node = new Node(data);
	this.head = node;
}
// value get 
LinkedList.prototype.getAt = function(index){
	let counter =0;
	let node = this.head; // Node { data: 6, next: undefined }
	while(node){
		if(index === counter){
			return node;
		}
		counter++;
		node = node.nex;// bir sonraki yapiya baglaniyoruz.
	}
	return null;
}

// value add
LinkedList.prototype.insertAdd = function(data,index){
	if (!this.head) {
		this.head = new Node(data);
		return null;
	}
	if (index === 0) {
		this.head = new Node(data,this.head);
	}
	const previous = this.getAt(index-1);
	let newNode = new Node(data);
	newNode.next = previous.next;
	previous.next = newNode;
	return this.head;
}

const list = new LinkedList();
list.insertFirstData(6);
list.insertAdd("can", 1);
console.log(list);//LinkedList { head: Node { data: 6, next: undefined } }

// console.log(list.getAt(0));//Node { data: 6, next: undefined }
