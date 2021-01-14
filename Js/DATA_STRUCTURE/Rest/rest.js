const sum = (...b) =>{
    let acc = 0;
    for (const i of b) {
        acc += i;
    }
    return console.log(acc);
}

//sum(1,2,3,4,5,6,7,8);

//==================================

const sum2 = (a,...b) =>{
    let firstNumber =a;
    for (const i of b) {
        firstNumber += i;
    }
    return console.log(firstNumber);
}

//====================================

const sum3 =(a,b,...c) =>{
    console.log(`${a} - ${b}`);
    let names;
    for (const i of c) {
        names+=i;
    }
    return names;
}

// console.log(sum3("muhammet", "Civan", "cokyaman","ahmet"));

//============================================

function func(){
    show=()=>{
        console.log(arguments[2]);
    }
    show();
}
func(1,2,4,5,67);


//------------------------------------------

console.log(Math.max(1,2,3,4,5,6,7,));//7

console.log(Math.max([1,2,3,4,5,6,7]));//NaN

let arr = [1,2,3,4,5,6,7];
console.log(Math.max(...arr));//7

let arr2 = [5,6,7];
let arr3 = [8,9,-1];
console.log(Math.max(...arr2,...arr3));//9

//==========================================

let nums = [3, 5, 1];
let nums2 = [8, 9, 15];

let merged = [0, ...nums, 2, ...nums2];

console.log(merged); // 0,3,5,1,2,8,9,15 (0, then arr, then 2, then arr2)

//===================================================

let str = "Hello";

console.log( [...str] ); // H,e,l,l,o

//=====================================

let str2 = "Hello";

console.log(Array.from(str2));

//==================================

// Object.assign() kullanimi ile rest!

let deg1 = [1,2,3,4];
let degCopy = [...deg1];

console.log(deg1 === degCopy);//false
(JSON.stringify(deg1) === JSON.stringify(degCopy));//true

console.log(typeof deg1);//[1,2,3,4] = Object
console.log(typeof JSON.stringify(degCopy));//[1,2,3,4] = String

console.log( typeof Object.assign([] , deg1) );//[1,2,3,4] = Object

///=======================================
