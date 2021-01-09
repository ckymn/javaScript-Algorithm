/*
	Dizi ve objelere daha esnek aram yapmamiza yardimici olur done, value degerinde 
	parametreler ile degeri ve bitip bitmedigine dair biligler geri doner.
*/

let range = {
	from: 1, //1'den basla
	to:5 // 5'e kadar sursun 
};

range[Symbol.iterator] = function(){
	return {
		current: this.from,
		last: this.to,

		next(){
			if (this.current <= this.last) {
				return {done: false , value: this.current++};
			}
			return {done: true};
		}
	}
}

for (num of range) {
	console.log(num);				
}

//=======================
for (char of "Muhammet") {
	console.log(char);
}