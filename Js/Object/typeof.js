/**
 * @param {undefined} bildirilmis ama tanimlanmamis. typeof == object
 * @param {null} bos deger. typeof == undefined
 */
let x
console.log(typeof x) // undefined

if(x == null) console.log('yes') //yes

x = null
console.log(typeof x) // null
/**
 * burda true donecek cunku undefined kendiside degersizdir == null .
 */
if(x == undefined) console.log('tur')
