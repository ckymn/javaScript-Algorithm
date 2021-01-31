"use strict";
function Person(name) {
  this.name = name;
}
let ferdinand = Person("ferdinand");
console.log(ferdinand);

// =====================

function promptDireciton(question) {
  let result = prompt(question);
  if (result.toLowerCase() == "left") return "L";
  if (result.toLowerCase() == "right") return "R";
  throw new Error("Invalid direction", result);
}

function look() {
  if (promptDireciton("Hangi yolu seciyorsun: left or right") == "L")
    return "eve geldik ";
  else {
    ("okula geldik");
  }
}
try {
  console.log(look() + " Hosgeldin....");
} catch (error) {
  console.log("something went wrong", error);
}

//-----------------------
