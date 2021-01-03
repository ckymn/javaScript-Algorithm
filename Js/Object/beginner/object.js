const user ={
    isim: 'Muhammet',
    yas: 21,
    renk: 'Black',
}

let search = prompt('Ne ogrenmek istersiniz ?',user.isim)
// uzun bir arama oldugu icin . koymadan yapiyoruz
alert(user[search])


// computed properties (Hesaplanmis Veriler...)
let meyve = prompt('hangi meyveyi seviyorsun ?','elma')

const poset = {
    [meyve]: 5,
    armut: true,
}
alert(poset.elma)
