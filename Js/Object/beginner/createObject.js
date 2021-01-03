const nesne = {
  renk: 'kirmizi',
  adet: 2,
  birseyYap: () => {
    console.log('olustu...')
  }
}
nesne.birseyYap()

// veri eklemek
nesne['degisken'] = 1
nesne.degiskne1 = 2
nesne['Nemrudun Kizi'] = true

// veri alma
alert(nesne.adet)
    //-> 2
alert(nesne['Nemrudun Kizi'])
    //-> True

// veri silmek
delete nesne.degiskne1
delete nesne['Nemrudun Kizi']

console.log(nesne)

