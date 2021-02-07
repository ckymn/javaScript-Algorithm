const waitThenCall = (msg) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(msg + "success");
    }, 1000);
  });
};

waitThenCall("Hello1_")
  .then((data) => {
    console.log(data);
    return waitThenCall("Hello2_");
  })
  .then((data) => {
    console.log(data);
    return waitThenCall("Hello3_");
  }, undefined)
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
