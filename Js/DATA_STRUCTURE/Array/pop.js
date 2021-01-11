/**
 * {pop}: Bir diziden son elemani cikartir ve cikardigi degeri doner
 */

let dizi = [1,2,4,5,6]
let returnDizi = dizi.pop()
console.log(returnDizi)// 6
console.log(dizi)// 1,2,3,4,5
// asagida farkli referans adresini cagiriyoruz
console.log(returnDizi)// 6
// burda ise ana referans degerini cagiriyoruz
console.log(dizi.pop())// 5


