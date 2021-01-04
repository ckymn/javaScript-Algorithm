// /**
//  * {map}:  Bir dizideki tum elemanlari verilen fonksiyona gore duzenler ve yeni bir Dizi olusturur
//  */

// const array1 = [1, 2, 3, 4, 5]
// const map1 = array1.map(x => x * 2)
// console.log(map1) //2,4,6,8,10

// console.log(typeof map1) // object

// const numbers = [4, 9, 16, 25]
// const x = numbers.map(Math.sqrt)
// console.log(x) // 2,3,4,5

// /**
//  * {map}:cok buyuk bir array icerisinde aramak durumunda kalmadan sadece istedigimiz array'i degil
//  *       degerleri alip bir dizi icerisinde bizlere sunan bir metod'tur
//  * {find}:buyuk array icerisinde bulmak istedigimiz sonucun ilk array degerini donderir
//  * {filter}:butuk array icerisinde bulmak istedigimiz sonucun tum array degerlerini donderir
//  */

let data = [
  {
    _id: '5e652aa6baec2fe6fea7ed2c',
    index: 0,
    guid: '25743f49-50b9-417a-93c3-12bb3f80514c',
    isActive: true,
    balance: '$2,339.94',
    picture: 'http://placehold.it/32x32',
    age: 37,
    eyeColor: 'blue',
    name: 'Pate Henry',
    gender: 'male',
    company: 'MEDCOM',
    email: 'patehenry@medcom.com',
    phone: '+1 (904) 587-2879',
    address: '937 Voorhies Avenue, Valle, Minnesota, 9831',
    about:
      'Aute aute ipsum veniam Lorem aliqua exercitation pariatur ullamco. Cupidatat nisi amet pariatur culpa nulla ipsum laborum adipisicing adipisicing anim enim dolore eu ut. Duis adipisicing nulla aliqua minim culpa voluptate.\r\n',
    registered: '2020-01-31T08:07:48 -03:00',
    latitude: 38.253873,
    longitude: -120.599697,
    tags: [
      'duis',
      'nulla',
      'deserunt',
      'nulla',
      'consectetur',
      'amet',
      'eiusmod'
    ],
    friends: [
      {
        id: 0,
        name: 'Meagan Ray'
      },
      {
        id: 1,
        name: 'Salas Macdonald'
      },
      {
        id: 2,
        name: 'Diaz Gill'
      }
    ]
  },
  {
    _id: '5e652aa69cb94a55a21dbd24',
    index: 1,
    guid: '7fbd5a0a-5d8b-4cdd-97b7-f7715183ea60',
    isActive: true,
    balance: '$3,929.51',
    picture: 'http://placehold.it/32x32',
    age: 30,
    eyeColor: 'brown',
    name: 'Carole Daniels',
    gender: 'female',
    company: 'EARTHPLEX',
    email: 'caroledaniels@earthplex.com',
    phone: '+1 (863) 523-3588',
    address: '646 Montague Street, Cutter, Hawaii, 1870',
    about:
      'Eiusmod do qui veniam cupidatat velit est sit tempor nostrud nostrud tempor magna. Et officia velit excepteur dolor adipisicing adipisicing cupidatat voluptate et exercitation. Sint magna sit nisi laborum sunt dolore velit irure in proident. Veniam dolore amet amet dolor ullamco cupidatat Lorem.\r\n',
    registered: '2016-10-22T04:13:14 -03:00',
    latitude: 59.036927,
    longitude: 91.043976,
    tags: ['consectetur', 'ut', 'laboris', 'officia', 'velit', 'in', 'in'],
    friends: [
      {
        id: 0,
        name: 'Payne Santana'
      },
      {
        id: 1,
        name: 'Klein Woods'
      },
      {
        id: 2,
        name: 'Beck Mosley'
      }
    ]
  }
]
// Array icerisinde bir obje dondericem
// [
//   ({ e: 'patehenry@medcom.com', c: 'MEDCOM' },
//   { e: 'caroledaniels@earthplex.com', c: 'EARTHPLEX' })
// ]

const founded = data.map(item => {
  // burda gelen filed lari manipule ederek yeni bir dizi olu s.
  return {
    email: item.email,
    company: item.company
  }
})
console.log(founded)

// Array seklinde degilde duz string degeri geri dondericem
// [
//     'Pate Henry+1 (904) 587-2879937 Voorhies Avenue, Valle, Minnesota, 9831',
//     'Carole Daniels+1 (863) 523-3588646 Montague Street, Cutter, Hawaii, 1870'
// ]

const founded1 = data.map(item => {
  // burda gelen filed lari manipule ederek yeni bir dizi olu s.
  return item.name + item.phone + item.address
})

console.log(founded1)
