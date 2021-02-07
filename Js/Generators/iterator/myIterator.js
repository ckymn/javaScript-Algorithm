const square = function () {
  // 1 4  9 16 25
  let n = 0;
  return {
    next() {
      n++;
      if (n <= 5) {
        return {
          value: n * n,
          done: false,
        };
      }
      return {
        value: undefined,
        done: true,
      };
    },
  };
};

const squaredIterator = square();
console.log(squaredIterator.next()); //0
console.log(squaredIterator.next()); //1
console.log(squaredIterator.next()); //4
console.log(squaredIterator.next()); //9
console.log(squaredIterator.next()); //16
console.log(squaredIterator.next()); //125

/**
{ value: 1, done: false }
{ value: 4, done: false }
{ value: 9, done: false }
{ value: 16, done: false }
{ value: 25, done: false }
{ value: undefined, done: true }
 */