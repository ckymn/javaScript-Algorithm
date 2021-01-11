/**
 * {splice}:
 * *Bu method dizinin belli bir kismini verilen bir uzunluga gore alir
 */

let arr = [4,5,6,2,1,3]
const new_arr = arr.sort()
const new_arr2 = new_arr.splice(0,2)
console.log(new_arr2)

//--------------------------------------------------------------


let arr2 = ["I", "study", "JavaScript"];

arr2.splice(2, 0, "complex", "language");

console.log( arr2 ); // [ 'I', 'study', 'complex', 'language', 'JavaScript' ]

//--------------------------------------------------------------

let arr3 = ["I", "study", "JavaScript", "right", "now"];

// remove 3 first elements and replace them with another
arr3.splice(0, 3, "Let's", "dance");

console.log( arr3 ) // ["Let's", "dance", "right", "now"]

//--------------------------------------------------------------

let arr4 = [1, 2, 5];

arr4.splice(-1, 0, 3, 4,6);

console.log( arr4 ); // 1,2,3,4,6,5

//--------------------------------------------------------------

let arr5 = ["t", "e", "s", "t"];

console.log(arr5.slice(1,3));//[ 'e', 's' ]

console.log(arr5.slice(-2));//[ 's', 't' ]
