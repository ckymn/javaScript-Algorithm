function* arrIterator(arr) {
  for (let i = 0; i < arr.length; i++) {
    yield arr[i];
  }
}
const itr = arrIterator([1, 2, 3, 4, 5]);
console.log(itr.next());
console.log(itr.next());

/*{ value: 1, done: false }
   { value: 2, done: false }*/

//-----------------------------------

function* arrIterator(arr) {
  for (let i = 0; i < arr.length; i++) {
    return arr[i];
  }
}
const itr = arrIterator([1, 2, 3, 4, 5]);
console.log(itr.next());
console.log(itr.next());
/*{ value: 1, done: true }
  { value: undefined, done: true } */