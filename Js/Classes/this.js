// function decleration
function func() {
  console.log(this);
}
func();

// function expression
const func2 = function () {
  console.log(this);
};
func2();

// function arrow
const func3 = () => {
  console.log(this);
};
func3();

const elis = {
  name: "Elis",
  f1: function () {
    return this === elis;
  },
};
// suan elis objesinin f1'ne ait
console.log(elis.f1()); //ture

const f2 = elis.f1; //suan global'e ait
console.log(f2()); // false

