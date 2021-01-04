/**
 * {some}:
 * * every gibi calisir ama tum degerleri ture cikmasini beklemez, biri dogru ise bile true doner
 */
let arr = [1, 2, 3]

const some = arr.some(num => {
  return num < 2
})
console.log(some)
