let who = {
  name: "Muhammet",
  surname: "cokyaman",
  printFullName: function () {
    console.log(`${this.name} and ${this.surname}`);
  },
};

who.printFullName(); // Muhammet and cokyaman

let who2 = {
  name: "Ahmet",
  surname: "Cokyaman",
};

who.printFullName.call(who2); // Ahmet and Cokyaman

let newWho = who.printFullName.bind(who2);
console.log(newWho);

//=============================================

//amac bir objedeki fonksiyonu farkli objelerde kullanmamizi saglar!!!

function Obje1(number1, number2) {
  this.number1 = number1;
  this.number2 = number2;
}
Obje1.prototype.addNumbers = function () {
  console.log(`${this.number1} ${this.number2}`);
};

function Obje2(number1, number2) {
  this.number1 = number1;
  this.number2 = number2;
}

Obje2.prototype = Object.create(Obje1.prototype);
Obje2.prototype.constructor = Obje2; //cunku kendi constrructor degeri  bozuluyor

const ob2 = new Obje2(21, 12);
ob2.addNumbers(); //21 12
