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
