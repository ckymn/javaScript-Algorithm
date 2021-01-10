//JSON.stringify kullanim'nin tam tersi

let numbers = "[0,1,2,3]";

console.log(numbers[1]); //0

//bir diziyi parcalarina ayirip cozmek icin kullanilir.
numbers = JSON.parse(numbers);
console.log(numbers[1]); //1


let userData = '{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';

let user = JSON.parse(userData);
console.log(user);//{ name: 'John', age: 35, isAdmin: false, friends: [ 0, 1, 2, 3 ] }
console.log( user.friends[1] ); // 1

//--------------------------------------------
//JSON.parse() reviev islemi yapar haric tutma gibi

let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';

let meetup = JSON.parse(str, function(key, value) {

	if (key == 'date'){
		return new Date(value);
	} 
	return value;
});

console.log( meetup.date.getDate() ); // 30