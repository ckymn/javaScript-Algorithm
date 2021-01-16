function Calculator(a, b) {
  //yapici fonksiyon = constructor
  this.read = function () {
    this.a = a;
    this.b = b;
    return {
      one: console.log((a + b).toString()),
      secon: console.log(typeof (a + b).toString()),
    };
  };
  this.sum = function () {
    this.a = a;
    this.b = b;
    return console.log(a + b);
  };
  this.mul = function () {
    this.a = a;
    this.b = b;
    return console.log(+(a - b));
  };
}

let result = new Calculator(10, 5); // new
result.mul(); //5
result.sum(); //15
result.read(); //15,string
