//LITERAL OBJECTS

const person = {
  name: "John",
  surname: "Xereibo",
  age: 40,
  language: ["Kurmanci", "Tukce", "Spanish"],
  fullName: function () {
    return this.name + "-" + this.surname;
  },
  adress: {
    city: "Ankara",
    district: "Pursaklar",
  },
};

console.log(person.name); //dot notation
console.log(person["name"]); // bracket notation
console.log(person["na" + "me"]); // bracket* notation

console.log(person.fullName()); // dot notation
console.log(person["fullName"]()); // bracket notation

//=====================================================

//CONSTRUCTOR

function Person(name, surname, age) {
  this.name = name;
  this.surname = surname;
  this.age = age;
}
Person.prototype.fullName = function () {
  return this.name + "-" + this.surname;
};

const person1 = new Person("muhammet", "cokyaman", 21);
const person2 = new Person("metin", "cokyaman", 32);
console.log(person1);
console.log(person1.fullName());
console.log(person2);

//=======================================================

//CONSTRUCTOR OBJECTS

const workman1 = new Object();
workman1.name = "Halil";
workman1.surname = "Yildiz";
workman1.age = 24;
workman1.fullName = function () {
  console.log(this.name + "-" + this.surname);
};
console.log(workman1.age);
workman1.fullName();

//========================================================

//OBJECT.CREATE() ---> klonlama islemi yapar , referans atamayi engeller

const worklady1 = {
  name: "Seher",
  surnam: "Cokyaman",
  age: 23,
  fullName: function () {
    return this.name + "-" + this.surname;
  },
};
console.log(worklady1);

const worklady2 = Object.create(worklady1);

worklady2.name = "Gulistan";
worklady2.surname = "Cokyaman";
worklady2.age = 28;

console.log(worklady2);
console.log(worklady2.fullName()); //Gulistan-Cokyaman
