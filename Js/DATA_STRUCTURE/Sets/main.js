/**
 * {Set()}:
 * Set, özel bir tür koleksiyondur - "değerler kümesi" (anahtarsız),
 *    burada her değer yalnızca bir kez ortaya çıkabilir.
 * bir Set() constructor'i key-value olarak iceriye eklenir
 * br Set() constructor'i es6 ile gelen for...of ile [key-value] kontrol edebilirsin
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

let set = new Set()

let john = { name: 'John' }
let pete = { name: 'Pete' }
let mary = { name: 'Mary' }

// visits, some users come multiple times
set.add(john)
set.add(pete)
set.add(mary)
set.add(john)
set.add(mary)

// set keeps only unique values
//console.log(set.size) // 3

for (let user of set) {
  //console.log(user.name) // John (then Pete and Mary)
}
//=========================================================================

let values = [
  'Hare',
  'Krishna',
  'Hare',
  'Krishna',
  'Krishna',
  'Krishna',
  'Hare',
  'Hare',
  ':-O'
]
// map
values.map(item => {
  console.log(item)
})
console.log('--------------------------')
//all Reduce
values.reduce((acc, item) => {
  console.log(item)
}, [])
console.log('==========================')
// Foreach
values.forEach(i => {
  console.log(i)
})
console.log('+++++++++++++++++++++++++++')
// Reduce
const result = values.reduce((acc, item) => {
  if (!acc.includes(item)) {
    acc.push(item)
  }
  return acc
}, [])
console.log(result)
console.log('================================')
//Set()

function unique (arr) {
  return Array.from(new Set(arr));
}
console.log(unique(values));

console.log("_________________________________")
//==========================================================================
// ANAGRAM DUZENLEME ISLEMLERI 
let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

function aclean(arr){
    let map = new Map()
    console.log(map)
    for (const word of arr) {
        let sorted = word.toLowerCase().split('').sort().join('')
        map.set(sorted,word) //add      
    }
    console.log(map)// { 'anp' => 'PAN', 'aceehrst' => 'hectares', 'aer' => 'era' }
    return Array.from(map.values()) //[ 'PAN', 'hectares', 'era' ]
}

console.log(aclean(arr))

//============================================================================
let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys());
// let keys = [...map.keys()] bunuda kullanabiliriz


keys.push("more");

console.log(keys);

