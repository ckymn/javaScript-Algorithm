/**
 * {symbol}: Objelerin nitelikleri icin kullanilan teil(unique) ve degismez(immutuable) verit tipidir
 *          *tekil(unique): Symbol() === Symbol() // false
 *                  ?Array() === Array() //false
 *                  ?Object() === Object() //false
 *                  ?[] === [] //false
 *                  ?{} === {} //false
 * !Normalde Symbol() ile eklenen property'ler Object.keys() veya for..in ile geri donderilemez
 * *Bunun icin Object.assign() kullanilirsa key degeri geri doner.....
 *
 */

// Objeler sadece nitelik olarak String tipini kabul eder, key: degerinde (typeof 3)=== string cikar
let keyObj = { a: 1 }
const obj = {
  [keyObj]: 'merhaba',
  3: 'merhaba',
  5.5: 'merhaba'
}
Object.keys(obj) // ['3', '[object Object], '5.5']

// *Dolayısıyla objelerin (key) olarak sadece String tipini kabul ettiğini anlamış olduk.
// *String dışında yeni ilkel tipimiz Symbol tipini de obje niteliklerinde kullanabiliyoruz.

let sym = Symbol()
let obj1 = {
  [sym]: 1,
  a: 2,
  b: 3
}
obj1 // Object { a: 2, b: 3, Symbol(): 1 }
obj1[sym] // 1
obj1[Symbol()] // undefined

//===========================================

var sym2 = Symbol()
var obj2 = {
  [sym2]: 1,
  a: 2,
  b: 3
}
var sym2 = 'merhaba dünya'
obj2[sym2] //undefined;
console.log(Object.keys(obj2)) //['a' , 'b'] not have [sym]
console.log(Object.assign({}, obj2))

//==========================================
//obje niteliklerinde değer kaybolmaz,
//referansımızı kaybetsek bile nitelik tekil olmadığından değere ulaşabiliriz
var sym3 = 'helloworld'
var obj3 = {
  [sym]: 1,
  a: 2,
  b: 3
}
var sym3 = null
obj3[sym3] //undefined;
obj3['helloworld'] //1;
console.log(Object.keys(obj3)) //['a' , 'b'] not have [sym]
let clone3 = Object.assign({}, obj3) //{ a: 2, b: 3, [Symbol()]: 1 }
console.log(clone3[sym]) // 1
//============================================
let sym4 = Symbol('sym')
let obj4 = {
  [sym]: 1,
  a: 2,
  b: 3
}
console.log(Object.keys(obj4)) //['a' , 'b'] not have [sym]
let clone4 = Object.assign({}, obj4) //{ a: 2, b: 3, [Symbol()]: 1 }
console.log(clone4[sym]) // 1
//============================================
let myPrimitvieFunction = Symbol()
let obj5 = {
  [myPrimitvieFunction]: function () {
    return 'some secret values'
  }
}
let clone5 = Object.assign({}, obj5) //bunun ile erisilir
console.log(Reflect.ownKeys(obj5)) // bunun ile erisilir
console.log(Object.getOwnPropertySymbols(obj5))//bunun ile erisilir
console.log(clone5[myPrimitvieFunction])
