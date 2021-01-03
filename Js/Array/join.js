/**
 * {join}: Bir dizideki elemanlarin tumunu verilen karakter ile birlestirerek "String" olarak geriDon
 *         Varsayilan birlestirme karakterleri ','(virgul) ile belirlenmistir\
 */

const elements = ['fire','air','water']

console.log(elements.join()) // fire,air,water
console.log(elements.join('')) //fireairwater
console.log(elements.join('-')) //fire-air-water

console.log(typeof elements)// object
console.log(typeof elements.join())// string