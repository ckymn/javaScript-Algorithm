/**
 * Obje değişkeni objenin kendisini değil hafızadaki adresini tutar. Diğer bir deyişle referansını tutar.
 *
 */
let kullanici = {
  isim: 'Mazlum',
  yas: 21
}
kullanici.boy = 179

console.log('yas' in kullanici) // true. Cunku burda '' isareti ile degiskenin ismini arattik
console.log(kullanici.yas in kullanici) // false. burda ise degiskenin degerini arattik

for (const key in kullanici) {
  console.log(key) // isim, yas
  console.log(kullanici[key]) // mazlum, 21
}

// obje referans tiptir. Burda iki kullanici tek dolap...
let kullanici1 = { isim: 'Mümtaz' }
let yonetici = kullanici1
// 'İhsan', değişikliği kullanici referansında da etkili oldu. `Mümtaz` değişerek `İhsan` oldu.
yonetici.isim = 'İhsan'
console.log(kullanici1.isim) // ihsan

// Referans karsilastirmasi
let a = {}
let b = a
console.log(a == b)// ture
console.log(a === b)// ture
let a1 = {}
let b1 = {}
console.log(a1 == b1)// false
console.log(a1 === b1)// false

// Obje Klonlama -Object.assign
let klon ={}
for(let anahtar in kullanici1){
    klon[anahtar] = kullanici[anahtar]
}
klon.isim = 'kamuran'
console.log(klon.isim)// kamuran
console.log(kullanici1.isim)//Mumtaz