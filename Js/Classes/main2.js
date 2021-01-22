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
  //bu ozellik ve method class'a ozgurudur
  static showName = "Person";
  static staMethod() {
    return "STATIC METHOD CALISIYOR";
  }
}
// name1,name2 degerleri Person classin'in instance'i deniyor.
const name1 = new Person("ahmet", "cokyaman", 13);
const name2 = new Person("aren", "cokyaman", 4);

console.log(name1);
console.log(name2);
console.log(name1.fullName());
console.log(name1 instanceof Person); //true
console.log(name2 instanceof Person); //true

// console.log(Person.fullName());// ❌
console.log(Person.staMethod()); // ✅

console.log(name1.showName); // undefined
console.log(Person.showName); //Person
