const evens = [
  { name: 'muhammet', age: 21 },
  { name: 'ahmet', age: 13 }
]
// firstly way
let pair = evens.map(item => ({
  isim: item.name,
  yas: item.age
}))

// secondly way
let pair1 = evens.map(item => {
  return {
    isim: item.name,
    yas: item.age
  }
})
