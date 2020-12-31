/**
 * NOT : turkce karakter tanimiyor ve boslugu string olarak algiliyor dikkar !
 *  1- / \b /g : global de bosluk olan yerlere atama yapilir.
 *  1- / \b**** /g : globalde ***** ifadesi yerine atama islemi yapilir
 *  2- / \B /gi : global tum kelimelerin arasaina atama yapilir
 *      --.match(/m/gi) //: global ve harg duyars. olan m harflerini donecek dizi oluyor
 *      --.test() // : ture or false  
 *      --.search() // :degrin indexini verir
 *      --.exec() // :Gonderilen degeri Array e ceviriyor 
 *
 */

var metin1 = 'merhaba bugun javascript'

console.log(metin1.replace(/\b/g, '-')) // -merhaba- -bugun- -javascript-
console.log(metin1.replace(/\bbugun/g, '^')) // merhaba ^ javascript
console.log(metin1.replace(/\B/gi, '*')) // m*e*r*h*a*b*a b*u*g*u*n j*a*v*a*s*c*r*i*p*t
console.log(metin1.match(/a/g)) //[ 'a', 'a', 'a', 'a' ]
console.log(/bugun/.test(metin1)) //ture
console.log(/a/.exec(metin1))//[ 'a', index: 4, input: 'merhaba bugun javascript', groups: undefined ]
console.log(metin1.search(/bugun/g)) //8
