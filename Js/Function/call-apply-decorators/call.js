let worker = {
  someMethod() {
    return 1;
  },

  slow(x) {
    console.log("Called with " + x);
    return x * this.someMethod();
  },
};

function cachingDecorator(func) {
  let cache = new Map();
  return function (x) {
    if (cache.has(x)) {
      return cache.get(x);
    }
    let result = func(x);
    cache.set(x, result);
    return result;
  };
}

let func = worker.slow;

func.call(2, 3, 4);
