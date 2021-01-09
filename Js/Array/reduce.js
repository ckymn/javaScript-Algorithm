/**
 * {reduce}:
 * *
 */

// Tum degerleri toplama
const euros = [29.76, 41.85, 46.5]
const sum = euros.reduce((total, amount, index, array) => {
  console.log('total degeri:', total) // 29.76 ilk degeri tutan parametre
  console.log('amount degeri:', amount) // 41.85 o an islem yaptigimiz ogemiz
  console.log('index degeri:', index) // 1 o an islem yaptigimiz indis
  console.log('array degeri:', array) // [ 29.76, 41.85, 46.5 ] // dizinin kendisi
  total + amount
}, 0) // burda istersek baslangic degeri'de atayabiliyoruz
console.log(sum) //118.11


//---------------------------------------------------------------------------------------

console.log(typeof {});//object
console.log(typeof []);//object woops not Array ?

console.log(Array.isArray({})); // false
console.log(Array.isArray([])); // true