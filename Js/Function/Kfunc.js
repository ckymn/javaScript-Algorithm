//FIRST CLASS FUNCTION KURALLARI

const myFunc = function (num) {
  return {
    toDouble: function () {
      console.log(num * 2);
    },
  };
};

myFunc(8).toDouble();

//---------------------------

const youFunc = function (num) {
  return function toDouble() {
    console.log(num * 2);
  };
};

// youFunc(8)();
let result = youFunc(8);
result();

//----------------------------

const sum = function () {
  console.log(5 + 12);
};

sum();

//----------------------------

//IIFE

(() => {
  console.log(5 + 12);
})();
