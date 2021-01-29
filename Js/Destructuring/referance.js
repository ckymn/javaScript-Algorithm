const person = {
  name: "John",
  surname: "Xereibo",
  age: 40,
  language: ["Kurmanci", "Tukce", "Spanish"],
  fullName: function () {
    return this.name + "-" + this.surname;
  },
};

const ali = person; // referans islemi yapildi
console.log(ali.age); // 40
ali.age = 41;
console.log(ali.age); // 41
console.log(person.age); // 41 !! BURDA REFERANCE ISLEMI YAPTILDIGI ICIN DEGERLER DEGISBILIYOR
