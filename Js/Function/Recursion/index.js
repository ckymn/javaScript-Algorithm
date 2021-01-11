
// RECURSIVE
const pow = (x,n) =>{
	let result = 1;
	for(let i = 0; i < n; i++){
		result *= x;
	}
	return result;
}
console.log(pow(2, 3));//-->8


//RECURSION
const pow2 =(x,n) =>{
	return (n == 1) ? x : (x * pow2(x, n-1));
}
console.log(pow2(2,3));//8