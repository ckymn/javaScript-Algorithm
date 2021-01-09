	/*
			Class -> Object

			Instance Properties : what they have
				- name
				- age
				- height

			Instance Methods : what they do
				- getArea 
				- printDescription
				- jump
	*/


class Rectangle {
	// setup
	constructor(_name,_age,_height){
		console.log('The Rectangle is being created...')
		//properties
		this.name = _name;
		this.age = _age;
		this.height= _height;
	}
	// method
	getArea(){
		return this.height 
	}

	printDescription(){
		console.log(`I'm Reactangle of ${this.height} and is name ${this.name} you age ${this.age}`)
	}

	// getter 
	get area() {
		return this.height + this.name;
	}

	// setter
	set area_height(newHeight) {
		this.height = newHeight;
	}
}

const myRectangle1 = new Rectangle("Muhammet",21 , 179);

console.log(myRectangle1);
console.log(myRectangle1);
console.log(myRectangle1.getArea());
myRectangle1.printDescription();
console.log("no setter: ", myRectangle1.area);
myRectangle1.area_height = 220;
console.log("yes setter: ", myRectangle1.area)