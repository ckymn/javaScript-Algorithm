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

//=====================================

//loops - closures -- IIFE
function wrapElements(a) {
  let result = [],i
    
    for (i = 0; i < a.length; i++) {
     (result[i] = function() {return a[i]})()
    }
     return result;
   }
  
  const sonuc = wrapElements([1, 2, 3, 4, 5, 6]);
  
  console.log(sonuc);
  