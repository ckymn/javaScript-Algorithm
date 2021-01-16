function Animal(name) {
  this.name = name; // this === Animal.prototype
}

let animal = new Animal("muhammet");
let animal2 = new Animal("ahmet");
console.log(animal.name);
console.log(animal.__proto__.constructor); //[Function: Animal]
console.log(animal2.__proto__.constructor); //[Function: Animal]
console.log(animal.__proto__.constructor.__proto__.valueOf); //[Function: Animal]

// Her olusturulan Objenin(animal) icerisinde __proto__ (prototype) olusturulur
// Eger Animal'dan birtane daha Obje(animal2) olusursa animal ve animal2 icindeki  __proto__ (prototype) ayni olur
// Yani iki veya daha fazla ayni Yapici Fon. uretilen Objenin tek Prototype'i vardir.
// Burda her iki metodtta yazilan ozellikler prototype icinde saklanir,yani iki kopya olmus olur
// Ayrica Animal icindeki __proto__ altinda bir tane daha __proto__ var buda Object(ana) icinden gelir

function Employee(name, age) {
  this.name = name;
  this.age = age;
  this.showInfo = function () {
    console.log("bilgiler var");
  };

  console.log(this); //Employee { name: 'salih', age: 32, showInfo: [Function (anonymous)] }
}

let emp1 = new Employee("salih", 32);
console.log(emp1); //Employee { name: 'salih', age: 32, showInfo: [Function (anonymous)] }
console.log(emp1.name); //salih >> this === emp1

/**
 * Prototype : Aslinda bizim Objeler arasi kalitim yapmamizi saglayan yapidir
 */