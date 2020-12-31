/**
 * \d : 0-9 arasi herhangi bir sayisal karakteri bulmaya yarar
 * \b : kendinden sonra gelecek islemlerin yazdirilmamasi
 * \D : Sayisal olmayan herhangi bir karakterin yerine gecer
 * \w : A-Z , a-z , 0-9 , _, arsasinda herhangi birinin yerine gecer
 * \W : Kelime karakteri olmayan herhangi bir karakterin yerine gecer
 * \s : Space ve Tab gibi whitespace ifadelerin yerine gecer
 * \S : WhiteSpace olmayan herhangi bir karakterin yerine gecer
 *  . : Yeni satir karakteri \n haric herhangi bir karakterin yerine gecer
 * [...] : Parantezin icine yazilacak karakterlerden herhangi birinin yerine gecer
 * [^...] : Parantezin icine yazilacak karakterlerin disinda herhangi birinin yerine gecer
 * {n} : Kendinden once gelen karakterin n kez tekrar edecegini belirtir
 * {n, } :Kendinden once gelen karakterin n kez yada daha fazla tekrar edecegini belirtir
 * {n,m} : Kendinden once gelen karakterin en az n en cok m kadar tekrar edecegini belirtir
 *  ? : Kendinden once gelen karakterin 0 yada 1 kez tekrar edecegini belirtir
 *  + : Kendinden once gelen karakterin 1 yada daha fazla kez tekrar edecegini belirtir
 *  * : Kendinden once gelen karakterin 0 yada daha fazla kez tekrar edecegini belirtir 
 */

let metin1 = ', gelecek hafta 24 agustos 545 0045 54 agustos hava gunesli'

console.log(metin1.match(/\d+/g).join('')) // 24545004554
console.log(metin1.match(/\d{2}/).join('')) //545
console.log(metin1.match(/./)) //, g
console.log(metin1.match(/.../)) //, gel
console.log(metin1.match(/\w/)) //g 
console.log(metin1.match(/\s/)) // ''
console.log(metin1.match(/.+/)) //, gelecek hafta 24 545 0045 54 agustos hava gunesli
console.log(metin1.match(/./)) //, gelecek hafta 24 545 0045 54 agustos hava gunesli

// 24 agustos yazdir
console.log(metin1.match(/\d{2}\s\w+\b/))//24 agustos
console.log(metin1.match(/[a-z].+/))//gelecek hafta 24 agustos 545 0045 54 agustos hava gunesli

// burda sayi ile baslayip sayi ile biten degerleri cagirdik
let obj = ['22kkkkk22','fdfdsfsdf','3434dfjakfj666']
let result =/\d.+\d\b/
for (let i =0; i<obj.length;i++) {
    if(result.test(obj[i])){
        console.log(obj[i])
    }
}