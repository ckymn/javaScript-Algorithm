const arr = [1,2,2,3];

const set = new Set(arr);
console.log(set);//Set(3) { 1, 2, 3 }

const set2 = new Set(arr);
console.log(...set2);// 1 2 3

const set3 = Array.from(new Set(arr));
console.log(set3);// [1,2,3]


