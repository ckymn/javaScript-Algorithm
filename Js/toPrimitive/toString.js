let user = {
  name: 'jhon',
  toString () {
    return this.name
  }
}
console.log(user + 500) //jhon500

let obj = {
  name: 'jhon',
  monye: 1000,

  toString () {
    return '2'
  },
  valueOf () {
    return this.money
  }
}
console.log(obj * 2) //4
