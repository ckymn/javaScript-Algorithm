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
    console.log(`${a} ${b}`);
    let names;
    for (const i of c) {
        names.
        names+=i;
    }
    return names;
}

console.log(sum3("muhammet", "Civan", "cokyaman","ahmet"));
