/*
	Daha önce belirtildiği gibi, bir liste düğümü iki öğe içerir
	: veriler  (data)
	: sonraki düğüme işaretçi(next). 
*/

class ListNode {
	constructor(data){
		this.data = data;
		this.next = null;
	}
}
/*
	Aşağıdaki kod, bir yapıcıyla bağlantılı bir liste sınıfının uygulanmasını gösterir.
 	Baş düğümü geçilmezse, başın sıfır olarak başlatıldığına dikkat edin.
*/
class LinkedList{
	constructor(){
		this.head = null;
		this.tail = null
	}
	//Bu yontem, baglanti listesine eleman eklemeyi tanimliyoruz.
	append = (value) =>{
		const node = new ListNode(value);
		if(!this.head) {
			this.head = node;
			this.tail = node;
			return 
		}
		this.tail.next = node;
		this.tail = node;
	}

	//Bu yontem, baglantiyi listenin BELIRLI bir yerine ekleme islemi
	insert = (index,value) =>{
		if (index < 0 || index > this.size()) return 
		
		const node = new ListNode(value);
		let current = this.head;
		let previous;
		if (index === 0) {
			//first position
			node.next = current;
			this.head = node;
		}
		else{
			let i =0;
			while(i++ < index){
				previous = current;
				current = current.next;
			}
			node.next = current
      		previous.next = node
		}
	}

	//Bu yöntem, bağlantılı listede bulunan düğümlerin sayısını döndürür.
	size = () =>{
		let count =0;
		let node = this.head;
		if(!node) return 0;
		while((node = node.next)){
			count++;
		}
		return count;
	}
}

/*
  İlk olarak, iki liste düğümü node1ve node2düğüm 1'den düğüm 2'ye bir işaretçi oluşturuyoruz.
*/

let node1 = new ListNode(2);
let node2 = new ListNode(5);
node1.next = node2;


let list = new LinkedList(node1);
// console.log(list.head.next.data);//5
// console.log(list.head)//ListNode { data: 2, next: ListNode { data: 5, next: null } }

list.append(1);
list.append(3);
list.append(4);
list.size();
console.log(list.head.next.data);
console.log(list.head);