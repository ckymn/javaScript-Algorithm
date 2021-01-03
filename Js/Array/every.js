/**
 * {every}: Bir dizi icerisinde tum degerleri kontrol eder
 *          ver tum degerler uyusursa true aksi halde false deger doner
 */

const isBigEnough = num => {
  return num >= 10
}

[12, 5, 8, 130, 44].every(isBigEnough);   // false
[12, 54, 18, 130, 44].every(isBigEnough); // true

let arr = [1,2,3].every(function(num) { return num < 4})
console.log(arr)

let arr1 = [1,2,3].every((num) => num < 4)
console.log(arr1)