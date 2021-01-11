let kullanici = {
  isim: 'Mümtaz',
  beden: {
    boy: 182,
    en: 50
  }
}

let klon = Object.assign({}, kullanici)

console.log(kullanici.beden === klon.beden) // true, doğru aynı obje

// diyelim ki kullanicida değişiklik yaptınız
kullanici.beden.en++ // change a property from one place
console.log(klon.beden.en) // 51, gördüğünüz üzere birinde yaptığınız değişiklik diğerini de etkiledi.

console.log(`Naber`.charAt(0))
let name = 'Muhammet'
console.log(name[name.length-1])
console.log('Naber'.charAt(0))
console.log('Naber'[`Naber`.length-1])
