function slow(x) {
  console.log(`Clled with ${x}`);

  return x;
}

function cachingDecorator(func) {
  let cache = new Map();

  return function (x) {
    if (cache.has(x)) {
      return cache.get(x);
    }

    let result = func(x); //otherwise call func

    cache.set(x, result);

    return result;
  };
}

conc = cachingDecorator(slow);

console.log(conc(1));
console.log("Again : " + conc(1));

console.log(conc(2));
console.log("Again : " + conc(2));
