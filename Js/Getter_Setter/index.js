let user = {
  name: "Mami",
  surname: "Cokyaman",

  get fullName() {
    return `${this.name} ${this.surname}`;
  },
  set fullName(value) {
    [this.name, this.surname] = value.split(" ");
  },
};
// get sadece deger doner
console.log(user.fullName);

//set ise deger atamasi yapar
user.fullName = "Alice Cooper";
console.log(user.fullName);

//=====================================================

let user2 = {
  name: "John",
  surname: "Smith",
};

Object.defineProperty(user2, "fullName", {
  get() {
    return `${this.name} ${this.surname}`;
  },

  set(value) {
    [this.name, this.surname] = value.split(" ");
  },
});

console.log(user2.fullName); // John Smith

for (let key in user2) console.log(key); // name, surname

//=======================================================

let user3 = {
  get name() {
    return this._name;
  },

  set name(value) {
    if (value.length < 4) {
      console.log("Name is too short, need at least 4 characters");
      return;
    }
    this._name = value;
  },
};

user3.name = "Pete";
console.log(user3.name); // Pete

user3.name = ""; // Name is too short...

//==================================================================

function User4(name, birthday) {
  this.name = name;
  this.birthday = birthday;

  // age is calculated from the current date and birthday
  Object.defineProperty(this, "age", {
    get() {
      let todayYear = new Date().getFullYear();
      return todayYear - this.birthday.getFullYear();
    },
  });
}

let john = new User4("John", new Date(1992, 6, 1));

console.log(john.birthday); // birthday is available
console.log(john.age); // ...as well as the age
