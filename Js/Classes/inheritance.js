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
