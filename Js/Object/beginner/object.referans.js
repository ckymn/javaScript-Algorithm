// obje referans tiptir. Burda iki kullanici tek dolap...
let kullanici1 = { isim: 'Mümtaz' }
let yonetici = kullanici1

// 'İhsan', değişikliği kullanici referansında da etkili oldu. `Mümtaz` değişerek `İhsan` oldu.
yonetici.isim = 'İhsan'
console.log(kullanici1.isim) // ihsan

// 'Obje Klonlama  ile referans olsa bile degismeyecek obje
let klon = {}
for (let anahtar in kullanici1) {
  klon[anahtar] = kullanici1[anahtar]
}
klon.isim = 'kamuran'
console.log('klon' + klon.isim) // kamuran
console.log(kullanici1.isim) //ihsan

// 'Obje Klonlamanin baska bir yolu
let klon2 = {}
klon2 = Object.assign({}, kullanici1)
console.log(klon2) //{ isim: 'İhsan' }
console.log(klon === klon2) // false

// Obje ve Obejct.assign
let person = { date: 1998 }
let klon3 = Object.assign({}, person)
console.log(person.date === klon3.data) // false

// -Object.assign ile referans degeri degismeyecek obje ve  ekleme islemi yapilir
let izin1 = { isim2: 'Muhammet' }
let izin2 = { duzen: true }
Object.assign(kullanici1, izin1, izin2)
console.log(kullanici1) // { isim: 'İhsan', isim2: 'Muhammet', duzen: true }

// Referans karsilastirmasi
let a = {}
let b = a
console.log(a == b) // ture
console.log(a === b) // ture
let a1 = {}
let b1 = {}
console.log(a1 == b1) // false
console.log(a1 === b1) // false

const marry = (man, woman) => {
  woman.husband = man
  man.wife = woman

  return {
    father: man,
    mother: woman
  }
}

let family = marry({ name: 'jhon' }, { name: 'ann' })

console.log(family)
