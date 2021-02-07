const waitThenCall = (msg) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(msg + "success");
    }, 1000);
  });
};

function* run() {
  try {
    const data1 = yield waitThenCall("Hello_1");
    console.log(data1);
    const data2 = yield waitThenCall("Hello_2");
    console.log(data2);
    console.log("Hello");
  } catch (err) {
    console.log(err);
  }
}
run().next();
