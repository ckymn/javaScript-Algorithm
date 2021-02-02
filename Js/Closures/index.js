const init = function () {
  const name = "Mami";

  function display() {
    console.log(name);
  }
  display();
};
init(); //calisir ==> Mami

//==========================
const init2 = function () {
  const name = "Mami";
  function display() {
    console.log(name);
  }
  return display;
};
const func = init2();
func(); // calisir ==> Mami

//=========================
const init3 = function () {
  const name = "Mami";
  function display() {
    console.log(name);
  }
  return display;
};
init3(); // calismaz

//=========================
const init3 = function () {
  const name = "Mami";
  function display() {
    console.log(name);
  }
  return display;
};
init3()(); // calisir...(invoked)

//=======================
const init4 = function () {
  const name = "Mami";
  function display() {
    console.log(name);
  }
  return display();
};

init4(); // calisir ==> Mami

//==========================
function make(x) {
  return function (y) {
    return x + y;
  };
}

const add = make(5);
console.log(add(2)); //7

//=========================
function make(x) {
  return function (y) {
    return x + y;
  };
}

const add = make(5);
console.log(add(2)); //calisir

//====================
function make1(x) {
  return function (y) {
    return x + y;
  };
}

const add1 = make1(5)(2);
console.log(add1); //calisir

//====================

var counter = function () {
  var value = 0;
  return function (val) {
    return (value += val);
  };
};

const add2 = counter();
console.log(add2(2)); //calisi

//====================================
// closure inside for-loop
function wrapElements(a) {
  let result = [];

  for (let i = 0; i < a.length; i++) {
    function display() {
      return a[i];
    }
    result[i] = display();
  }
  return result;
}

const sonuc = wrapElements([1, 2, 3, 4, 5, 6]);

console.log(sonuc[0]);//1
