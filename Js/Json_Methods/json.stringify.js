/*
	Diyelim ki karmaşık bir nesnemiz var ve onu bir dizeye dönüştürmek,
	onu bir ağ üzerinden göndermek veya sadece günlükleme amacıyla çıktı almak istiyoruz.
	bunun icin JSON.stringify() kullanilir.
	JSON.stringify work:
			-array , object , boolean , null, int 
	JSON.stringify ignored:
			-function , Symbol[key]-value , undefined
*/	


//>>>> toString()
let user = {
	name: "Muhammet",
	age: 21,

	toString(){
		return `{name: "${name}", age: "${age}"}`;
	}
};
console.log(user);//{ name: 'Muhammet', age: 21, toString: [Function: toString] }


/*
Ancak geliştirme sürecinde yeni özellikler eklenir, eski mülkler yeniden adlandırılır ve kaldırılır.
toStringHer seferinde böyle bir güncelleme acıya dönüşebilir. İçindeki özelliklerin üzerinden geçmeyi deneyebiliriz,
ancak ya nesne karmaşıksa ve özelliklerde iç içe nesneler varsa? Onların dönüşümünü de uygulamamız gerekir. 
*/

//>>>>JSON.stringify()

// "JSON.stringify" nesneleri JSON'a dönüştürmek için.
// "JSON.parse JSON"'u bir nesneye geri dönüştürmek için.

let students = {
	name: "Jhon",
	age:30,
	isAdmin: false,
	courses: ["html","css","js"],
	wife: null
};

let json = JSON.stringify(students);
console.log(typeof json);//string
console.log(json);//{"name":"Jhon","age":30,"isAdmin":false,"courses":["html","css","js"],"wife":null}

/*
JSON ile kodlanmış bir nesnenin, nesne değişmezinden birkaç önemli farklılığı olduğunu lütfen unutmayın:

Dizeler çift tırnak kullanır. JSON'da tek tırnak veya ters işaret yok. Böylece 'John'olur >>> "John".
Nesne özellik adları da çift tırnaklıdır. Bu zorunludur. Böylece age:30 olur >>>"age":30.
*/

///----JSON TRUE CALISIR-----

console.log( JSON.stringify(1) ) // 1
console.log( JSON.stringify('test') ) // "test"
console.log( JSON.stringify(true) ); // true
console.log( JSON.stringify([1, 2, 3]) ); // [1,2,3]


///-----JSON FALSE IGNORED ------

let user2 = {
  sayHi() { // ignored
    alert("Hello");
  },
  [Symbol("id")]: 123, // ignored
  something: undefined // ignored
};

console.log( JSON.stringify(user2) ); // {} (empty object)

//------------------------------------------------------------------------------

let room = {
	number: 23
};

let meetup = {
	title: "Conference",
	participants: [{name: "Muhammet"}, {name: "Ahmet"}],
	place: room //meetup references room
};

room.occupiedBy = meetup;
console.log(room);
			// <ref *1> {
			//   number: 23,
			//   occupiedBy: {
			//     title: 'Conference',
			//     participants: [ [Object], [Object] ],
			//     place: [Circular *1]
			//   }
			// }
console.log("DeepEqual" +deepEqual(room,meetup));
// burda Converting circular structure to JSON hatasi cikmamasi icin Haric Tutma islemi yapicaz!!!
console.log(JSON.stringify(meetup,['title', 'participants', 'place', 'name', 'number']));
//-->{"title":"Conference","participants":[{"name":"Muhammet"},{"name":"Ahmet"}],"place":{"number":23}}

console.log(JSON.stringify(meetup, function replacer(key,value){
	console.log(`${key} : ${value}`);
	return (key == "occupiedBy") ? undefined : value; 
}));
			//  : [object Object]
			// title : Conference
			// participants : [object Object],[object Object]
			// 0 : [object Object]
			// name : Muhammet
			// 1 : [object Object]
			// name : Ahmet
			// place : [object Object]
			// number : 23
			// occupiedBy : [object Object]
			// {"title":"Conference","participants":[{"name":"Muhammet"},{"name":"Ahmet"}],"place":{
			// "number":23}}

//--------------------------------------------------------------------------------------------------------
