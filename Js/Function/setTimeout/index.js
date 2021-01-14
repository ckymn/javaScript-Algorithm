function sayHi() {
  console.log("Hello");
}
setTimeout(sayHi, 2000); // Hello 2sn sonra

// ------------------

function sayHi2(pharse, who) {
  console.log(pharse + " " + who);
}
setTimeout(sayHi2, 3000, "muhammet", "ahmet"); // muhammet ahmet 3sn sonra

//====================

setTimeout(() => {
  console.log("Hello");
}, 4000);

//--------------------

setTimeout((pharse = "ahmet", who = "ali") => {
  console.log(`${pharse} = ${who}`);
}, 5000);

//--------------------

let timerId = setInterval(() => {
  // her 1 saniyede Merhaba yazicak
  console.log("Merhaba");
}, 1000);

setTimeout(() => {
  clearInterval(timerId);
  console.log("Finish....");
}, 7000);


