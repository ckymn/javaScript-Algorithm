function Hero(name) {
  this.name = name;
}

const hero1 = new Hero("ahmet");

console.log(hero1.name);

//spread
const hero2 = {
  ...hero1,
};
console.log(hero2.name); //ahmet
hero2.name = "muhammet";
console.log(hero2.name); //muhammet
console.log(hero1.name); //ahmet

//object.assign
const hero3 = Object.assign({}, hero2);
console.log(hero3.name); //muhammet
hero3.name = "seher";
console.log(hero3.name); //seher
console.log(hero2.name); //muhammet

//object create
const hero4 = Object.create(hero3);
console.log(hero4.name); //seher
hero4.name = "Metin";
console.log(hero4.name); //metin
console.log(hero3.name); //seher
