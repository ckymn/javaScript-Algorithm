/**
 * {sort}:
 * * Bu metod dizi ogelerini siralayarak, ilgili siralanmis dizi degerlerini geri doner
 */
let arr = [4,5,6,2,1,3]
const new_arr = arr.sort()
console.log(new_arr)


let arr2 = [1,15,2,3,21]
arr2.sort((a,b) =>{
	return a > b ? 1 : a < b ? -1 : a ==b ? 0 : null;
});
console.log(arr2);