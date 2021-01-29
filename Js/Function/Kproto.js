//OBJECT CONSTRUCTOR
function Person(name, surname, age) {
  this.name = name;
  this.surname = surname;
  this.age = age;
}
Person.prototype.fullName = function () {
  return this.name + "-" + this.surname;
};

const person1 = new Person("muhammet", "cokyaman", 21);
// Object ==> Person ==> person1 // birbirlerinin prototype degerleri

console.log(person1);
console.log(person1.fullName());
//person1 nesnesi iceride bulunan constructor'dan degerleri cekebiliyor
//eskisi gibi direk prototype'tan cekemiyor protype icerisinde constructor tanimlanmis
// onun icerisinde yukaridaki degerler saklaniyor.
console.log(person1.__proto__); //constuctor()
console.log(person1.__proto__.__proto__); //toString(),hasOwnPrototype()
//====================================================================

//OBJECT CREATE
// `function Gender(name, surname, age) {
//   this.name = name;
//   this.surname = surname;
//   this.age = age;
// }
// Person.prototype.fullName = function () {
//   return this.name + "-" + this.surname;
// };

// const Kender = `Object.create(Gender); // prototype icerisinde saklidir.
// `console.log(Kender`);

const person = {
  name: "John",
  surname: "Xereibo",
  age: 40,
  language: ["Kurmanci", "Tukce", "Spanish"],
  fullName: function () {
    return this.name + "-" + this.surname;
  },
};

const kerson = Object.create(person);
console.log(kerson);
// burda klonlamis oldugu person'dan yeni bir object olusturdu kendisine
kerson.name = "Kemalettin";
console.log(kerson);//Object { name: "Kemalettin" }

//====================================================================

//CALSS
class WorkMan {
  constructor(name, surname, age) {
    this.name = name;
    this.surname = surname;
    this.age = age;
  }
  fullName = function () {
    return this.name + "-" + this.surname;
  };
}
// Class ==> WorkMan ==> man1 // birbirlerinin prototype degerleri cek.
const man1 = new WorkMan("ahemt", "cokyaman", 13);

console.log(man1);
console.log(man1.fullName());

console.log(man1.__proto__);
console.log(man1.__proto__.__proto__);
