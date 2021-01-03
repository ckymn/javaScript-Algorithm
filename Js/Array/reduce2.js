const fruit = [
  {
    name: 'Iphone 8',
    price: 7000
  },
  {
    name: 'Apple Macbook Pro',
    price: 14000
  },
  {
    name: 'Logitech K380',
    price: 400
  }
]
const sum = fruit.reduce((total, amount, index, array) => {
  return total + amount.price
}, 0)

//console.log(sum)

// bir array degerlerini bir obje haline getirebiliriz
const names = ['Tayfun', 'Mehmet', 'Ahmet', 'Gokhan', 'Tayfun']
let countedNames = names.reduce((allNames, name) => {
  if (name in allNames) {
    allNames[name]++
  } else {
    allNames[name] = 1
  }
  return allNames
}, {})

//console.log(countedNames)

// gruplandirma da yapabiliriz 
const mikrophone = [
  {
    name: 'smart1',
    brand: 'Rode'
  },
  {
    name: 'smart2',
    brand: 'MAudio'
  },
  {
    name: 'smar3',
    brand: 'Rode'
  }
]

let product = mikrophone.reduce((total, amount) => {
  let key = amount.brand
  if (!total[key]) {
    total[key] = []
  }
  total[key].push(amount)
  return total
}) // baslangic degeri olarak bos bir obje alacak

console.log(product)

