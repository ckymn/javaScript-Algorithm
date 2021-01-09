class Person{
	constructor(name,surname){
		this.name = name;
		this.surname = surname;
	}

	// property
	fullName(){
		return `name: ${this.name} surname: ${this.surname}`;
	}

	// static: sinif ornegi almadan kullanabiliyoruz
	static test(){
		return "Static test metodu....";
	}
}

class Staff extends Person{
	constructo(name,surname,salary){
		this.salary = salary;
		super(name,surname);
	}
}


const person = new Person("Muhammet","Cokyaman",);

person.fullName();
Person.test();