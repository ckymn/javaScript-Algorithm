const person = {
  name: "John",
  surname: "Xereibo",
  age: 40,
  language: ["Kurmanci", "Tukce", "Spanish"],
  fullName: function () {
    return this.name + "-" + this.surname;
  },
};

// * 1. Klonlama Islemi

const ali = Object.create(person);
console.log(ali.name);// Jhon
ali.name = "ali";
console.log(ali.name);// ali
console.log(person.name);// Jhon !!BURDA KLONLAMA ISLEMI OLUNCA BASKA DEGERLERE ETKI EDILMEZ

// *2. Klonlama islemi -datastructor

const ahmet = {...person};
console.log(ahmet.name);//Jhon
ahmet.name = "Ahmet";
console.log(ahmet.name);//Ahmet
console.log(person.name);//Jhon !! BURDA KLONLAMA ISLEMI OLUNCA BASKA DEGERLER ETKILERNMEZ

//  ? AYNI SEKILDE DATASTRUCTOR'LARI kullanarak Array'tarafinda da yapabiliriiz islemlerimizi


