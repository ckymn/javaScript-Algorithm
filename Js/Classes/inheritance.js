class Person {
  constructor(name, surname, age) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.friends = ["haci", "sinan"];
  }
  // bu metod instance'lara ait Perosn'a degil
  fullName() {
    return `${this.name} - ${this.surname}`;
  }
}

class Engineer extends Person {}

// SUPER CLASS
const aren = new Person("aren", "yasli", 2);
// SUP CLASS
const gurcan = new Engineer("gurcan", "yasli", 22);

console.log(gurcan);
console.log(aren);

console.log(arin instanceof Person);//true
console.log(gurcan instanceof Engineer);//true
console.log(gurcan instanceof Person);//true
console.log(arin instanceof Engineer);//false


