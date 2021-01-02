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

