class Person {
  constructor(name, surname, age) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.friends = ["haci", "sinan"];
  }
  static fullName() {
    return `${this.name} - ${this.surname}`;
  }
}

class Engineer extends Person {
  constructor(name, surname, age, job) {
    super(name, surname, age);
    this.job = job;
  }
  getMoney() {
    return "para kazaniyoruz...";
  }
}

const metin = new Person("metin", "cokyaman", 32);
const aren = new Engineer("aren", "cokyaman", 3, "bebek");

console.log(metin);
console.log(aren);

// console.log(aren.fullName()); --> static sadece class'a aittir!!
console.log(aren.getMoney());
