/**
 * *Normalde {...} soz dizimi nesne olusutrmaya izin veriyor.Ancak cogu zaman birden cok
 * * kullanici veya menu ogesi gibi bircok benzer nesne olusturmamiz gerekebilir
 * ?new : yeni bos bir nesen {} olusturur , 'this' ona yeni ozellikler ekler, degeri 'this' denderilir
 *       ? kisacasi "new User{...}" diye birsey olusturur.
 */

function User (name) {
  this.name = name
  this.isAdmin = false
}

let user = new User('salim')

console.log(user.isAdmin) //flase
console.log(user.name) //salim

//============================================

let mami = new (function () {
  this.name = 'muhammet'
  this.isAdmin = true
})()

console.log(mami.name)//Muhammet

//============================================

function BigUser () {
  this.name = 'ahmet'

  return { name: 'Godzilla' }
}
console.log(new BigUser().name) //Godzilla

//=============================================

function NewUser(name){
    this.name = name
    this.sayHi = function(){
        console.log(`My name is : ${this.name}`)
    }
}

let kamil = new NewUser('Serefettin')
kamil.sayHi() // My name is : Serefettin