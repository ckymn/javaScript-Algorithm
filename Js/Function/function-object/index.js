function ask(question, ...handlers) {
  let isYes = console.log(question);

  for (let handler of handlers) {
    if (handler.length == 0) {
      if (isYes) handler();
    } else {
      handler(isYes);
    }
  }
}
ask(
  "Question?",
  () => console.log("You said yes"),
  result => console.log(result)
);

//=====================================

function hello() {
  console.log("hello world");
}

console.dir(hello); //[Function: hello]
console.dir(hello.length); //0
console.dir(hello.toString()); //'function hello() {\r\n  console.log("hello world");\r\n}'
