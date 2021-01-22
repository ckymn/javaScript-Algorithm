// Class'lar bize prototype iceresindeki referans sorunu'nu ortadan kaldiriyor.

// CLASS DECLERATION
class Person {
  constructor(name, surname, age) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.friends = ["haci", "sinan"];
  }

  fullName() {
    console.log(`${this.name} - ${this.surname}`);
  }
}

const name1 = new Person("ahmet", "cokyaman", 13);
const name2 = new Person("aren", "cokyaman", 4);

console.log(name1);
console.log(name2);
name1.fullName();

// burda referans hatasini kaldirmis olduk !!
name1.friends.push("Cinar");
console.log(name1.friends);
console.log(name2.friends);

//Class'lar ozel bir fonksiyon'dur
console.log(typeof Person);

//===========================================

//CLASS EXPRESSION
const Foods = class {
  constructor(name, color, salary) {
    this.name = name;
    this.color = color;
    this.salary = salary;
  }
  delicious() {
    return `${this.name} - ${this.color}`);
  }
};

const kivi = new Foods("kivi", "greeen", 100);
const apple = new Foods("apple", "yellow", 20);

console.log(kivi);
console.log(apple);
console.log(kivi.delicious());
