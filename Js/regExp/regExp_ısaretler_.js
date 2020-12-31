/**
 * REGULLAR EXPRESSION:(duzenli ifadeler)
 *      -i : incasesensitive, Harf Buyuklugu duyarsizligi
 *      -g : global, Tum Eslesen Degerler
 *      -m : multiline, Cok Satir Islemler
 *      -^ : metnin en basinda aram islemi yapar
 *      -$ : metnin en sonunda arama islemi yapar
 *  --.match() // aratilan harfi yada kelimeyi array olar. doner
 *  --.split()
 *  --.replace() //yerne koymak
 */


var metin  = 'dunya duzdur ve ayda DUZDUR . '

let aranan = /duzdur/
// burda metindeki ilk degeri cevirir.
let result = metin.replace(aranan,'yuvarlak')

let aranan = /duzdur/g
// burda metindeki  tum aranan kucuk harfe uyumlu degerleri cevirir
let result = metin.replace(aranan,'yuvarlak')


var metin2 = 'bugun hava yagmurlu ve karliydi\nyarin ise hava gunesli ve sisli olacak bugun'

let aranan1 = /bugun$/ig
// metinin satir sonunda ,Harf duyarliligi, global olarak arama
let result1 = metin2.replace(aranan1,'lerde')
console.log(result1)

let aranan2 = /^bugun/igm
// metinin satir basinda ,Harf duyarliligi, global olarak arama,multiLine arama
let result2 = metin2.replace(aranan2,'air')
console.log(result2)



