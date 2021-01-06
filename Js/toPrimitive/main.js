/**
 * {Symbol.toPrimitive}: Karsilik geleln bir temel degere bir nesneyi donusutrmek icin 
 *                      adlandirilan bir fonksiyou degerli ozellik belirten bir semboldur
 */

const object = {
    [Symbol.toPrimitive](hint){
        return hint === 'number' ? 42 : null
    }
} 
console.log(object)// hint:string
console.log(+object)// hint:number 
console.log(object+3)// hint:default
console.log(object+'ahmet')// hint:default

//=================================================
let user ={
    name: 'jhon',
    money: 1000,
    [Symbol.toPrimitive](hint){
        console.log(`hint: ${hint}`)
        return hint === 'string'  ? `{name : "${this.name}"}` : this.money
    }
}
console.log(user)// hint:string >>> {name: 'jhon'}
console.log(+user)//hint: number >>> 1000
console.log(user+500)//hint: default >>> 1500
