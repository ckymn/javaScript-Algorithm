/**
 * {map}:  Bir dizideki tum elemanlari verilen fonksiyona gore duzenler ve yeni bir Dizi olusturur
 */

const array1 = [1,2,3,4,5]
const map1 = array1.map(x => x*2)
console.log(map1) //2,4,6,8,10

console.log(typeof map1)// object


const numbers = [4,9,16,25]
const x = numbers.map(Math.sqrt)
console.log(x)// 2,3,4,5

