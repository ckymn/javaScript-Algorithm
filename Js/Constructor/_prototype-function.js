function Employee(name, age) {
  this.name = name;
  this.age = age;
  //**showInfo yukardaki yazim ile her uretilen obje icin yeniden clon olmus olacak
  this.showInfo = function () {
    console.log(`${this.name} - ${this.age}`);
  };
}
const ap1 = new Employee("Ayhan", 21);
const ap2 = new Employee("Serdar", 34);
ap1.showInfo(); // Ayhan-21

//============================================================================

function Employee2(name, age) {
  this.name = name;
  this.age = age;
}
//** ama eger showInfo'yu prototype icerisine alirsak her opje uretmeden cagirabilece */
Employee2.prototype.showInfo2 = function () {
  console.log(`${this.name} - ${this.age}`);
};

const ap3 = new Employee2("Muhamemt", 20);
const ap4 = new Employee2("Eylul", 25);
ap3.showInfo2(); //Muhammet-20
ap4.showInfo2(); //Eylul-25
// biz metodlarimizi( prototype )icerisine yazarsak her( obje )o olusturulan metodlara sahip olmus olacak!!
