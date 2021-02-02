 //promise +then-catch
 const waitThenCall = (msg) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(msg + "success")
      }, 1000)
    });
  }
  
  waitThenCall("Hello1")
    .then((data) => {
      console.log(data)
      return waitThenCall("Hello2")
    }, (err) => {})
    .then((data) => {
      console.log(data)
      return waitThenCall("Hello3")
    }, undefined)
    .then((data) => {
      console.log(data)
    })
    .catch((err) =>{
        console.log(err);
    })

    //=======================================
  //async-await + try-catch
  const waitThenCall = (msg) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(msg + "success")
      }, 2000)
    });
  }
  
  const func = async () => {
    try {
      const result = await waitThenCall("Hello1");
      console.log(result)
      const result2 = await waitThenCall("Hello2");
      console.log(result2)
      console.log("Hello")
    } catch (e) {
      console.log("Hatali Durum");
    }
  }
  
  func();
  