const myArray = [1, 2, 3, 4, 5, 5, 6, 7, 8]
const mySet = new Set(myArray)

//spread
const uniqueArray = [...mySet]
console.log(uniqueArray);

//add Set
const deger = mySet.add('12')
//console.log(deger)

//add Set Object
const result = mySet.add({ name: 'muhammet', age: 20 })
//console.log(result)


//Array.from() : new array create and mySet key,values pushed
const keys = Array.from(mySet)
console.log(keys)

