
//RECURISVE

const fibonacci = (x) =>{
	return x < 1 ? 0 
		   : x < 2 ? 1 
		   : fibonacci(x-1) + fibonacci(x-2);
}
console.log(fibonacci(6)); //-->8


const fibonacci2 = (x) =>{
	return x <= 1 ? x : fibonacci2(x-1) + fibonacci2(x-2);
}
console.log(fibonacci2(6))//8