//JS Nuggets
//Array iteration: 8 methods

//forEach
[1, 2, 3].forEach((item, index) => {
  console.log(item, index);
});

//map
let arr = [1, 2, 3];
let result = arr.map((item) => {
  return item;
});
console.log(result);

//find
let arr2 = [1, 2, 3, 4];
let result2 = arr.find((item) => {
  if (item % 2 === 0) {
    console.log(item);
  }
});
result2;

//findIndex
let object = [{ id: "a" }, { id: "b" }, { id: "c" }];
const foundIndex = object.findIndex((item) => {
  return item.id === "b";
});
console.log(foundIndex);

//filter
let arr3 = [1, 2, 3, 4];
let result3 = arr3.filter((item) => {
  let a = [];
  if (item % 2 === 0) {
    return a.push(item);
  }
});
console.log(result3);

//reduce
const sum = [1, 2, 3].reduce((total, item) => {
  return total + item;
}, 0);
console.log(sum);

//some
const hasNegativeNumbers = [1, 2, 3, -1, 4].some((item) => {
  return item < 0;
});
console.log(hasNegativeNumbers); //true

//every
const allPositiveNumbers = [1, 2, 3 - 1].every((item) => {
  return item < 0;
});
console.log(allPositiveNumbers); //false
