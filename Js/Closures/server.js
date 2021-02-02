function counterGeneretor() {
  let a = 0;
  return function () {
    return (a += 1);
  };
}
const a = counterGeneretor();
console.log(a());//1
console.log(a());//2

//=============================

let value = 0;
function degerArttir() {
  const newFun = function () {
    console.log((value += 1));
  };
  return newFun;
}

const deger = degerArttir();
deger();//1
deger();//2

//==============================
function klvvyePress() {
  return function () {
    let value = 0;
    return (value += 1);
  };
}
const klavye = klvvyePress();
console.log(klavye());//1
console.log(klavye());//1
