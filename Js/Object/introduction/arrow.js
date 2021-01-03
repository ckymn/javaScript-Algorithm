const cameras = {
  price: 600,
  weight: 2000,
  myDes: () => {
    return `This canon camera is of ${this.price} $ and wight ${this.weight}. `
  }
}

console.log(cameras.myDes()) // this canon camera is of undefined and wight undefined

const cameras = {
  price: 600,
  weight: 2000,
  myDes: function(){
    return `This canon camera is of ${this.price} $ and wight ${this.weight}. `
  }
}

console.log(cameras.myDes()) // this canon camera is of 600$ and wight 2000

function f1 () {
    return this //window
  }
  
  function f2 () {
    'use strict'
    return this // undefined
  }
  