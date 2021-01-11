const nesne = {
  renk: 'kirmizi',
  adet: 2,
  birseyYap: function(){
    console.log('olustu...')
  }
}
nesne.birseyYap()

// veri eklemek
nesne['degisken'] = 1
nesne.degiskne1 = 2
nesne['Nemrudun Kizi'] = true
console.log(nesne)

// veri alma
console.log(nesne.adet)
    //-> 2
console.log(nesne['Nemrudun Kizi'])
    //-> True

// veri silmek
delete nesne.degiskne1
delete nesne['Nemrudun Kizi']

console.log(nesne)

