/**
 * {Map()}:
 * Object gibi ama Map her turden tusa izin veriyor
 * bir Map() constructor'i key-value olarak iceriye eklenir
 * br Map() constructor'i es6 ile gelen for...of ile [key-value] kontrol edebilirsin
 * *new Map(): Map olusturur
 * *new map.set(key,value): key value iliskisine gore ekleme islemi yapar
 * *new map.get(key): anahtar ile değer döndürür undefine değer key haritası yok.
 * *map.has(key)- true varsa döndürür key'i, false aksi takdirde.
 * *new map.delete(key): degeri key ile kaldirir
 * *new map.clear(): herseyi kaldirir
 * *new map.size: gecerli oge sayisini doner
 * *entries(obj): duz bir nesneden bir Map nesnesi(iterator) [key,value] olusturmak istiyoruz
 * *formEntries([obj]): Object.entries() tam tersi {key,value} olusturmak
 * *keys(): iterator object'in key degerlerini donderiyor
 * *values(): iterator object'in vlue degerlerini donderiyor\
 * *[@@iterator](): key degerleri [1,'2',{}] olsa dahi [Symbol.iterator]() diyerekten [key-value] doner
 * *
 */

const myMap = new Map()
myMap.set(0, 'zero')
myMap.set(1, 'one')

for (const [key, value] of myMap) {
  console.log(`${key} = ${value}`)
}
//0=zero
//1=one

for (const [key, value] of myMap.entries()) {
  console.log(`${key} = ${value}`)
}
//0=zero
//1=one

for (const key of myMap.keys()) {
  console.log(key)
}
//0
//1

for (const value of myMap.values()) {
  console.log(value)
}
//zero
//one

console.log('get ile deger cekme: ',myMap.get(0)) //zero
console.log('myMap boyutu: ',myMap.size) //2

// ===========================================================================

myMap.forEach((value, key) => console.log(`${key} = ${value}`))
//0=zero
//1=one

new Map([
  ['foo', 3],
  ['bar', {}],
  ['baz', undefined]
]).forEach((value, key) => {
  console.log(`[${key}] = [${value}]`)
})
//[foo] = [3]
//[bar] = [[Obect Object]]
//[baz] = [undefined]

// ===========================================================================

const newMap = new Map()
newMap.set( 1,'firstly')
newMap.set('2','secondly')
newMap.set({},'muhammet')

for (const [key,value] of newMap[Symbol.iterator]()) {
  console.log(`${key} = ${value}`)
}







