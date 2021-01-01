/**
 * @params {Bindings and scopes}
 */
let x = 10
if (true) {
  let y = 20
  var z = 30
  console.log(x + y + z)
  // -> 60
}
// y is not visible here
console.log(x + z)
//-> 40

function chicken () {
  return egg()
}
function egg () {
  return chicken()
}
console.log(chicken() + ' came first.')
// → ??
