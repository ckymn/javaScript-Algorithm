/**
 * {concat}: Birden fazla diziyi birbirine baglamak icin kullanilir
 */
console.log(Array.prototype.concat)

const arr = [1, 2, 3, 4, 5].concat([6, 7, 8, 9, 10])
console.log(arr)

let old_array = [21, 213, 4441, 45, 5]
let new_array = old_array.concat(arr)
console.log(new_array)

let num1 = [1, 2, 3],
  num2 = [4, 5, 6],
  num3 = [7, 8, 9]

let nums = num2.concat(num1, num3)
console.log(typeof nums)