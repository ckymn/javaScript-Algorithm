/**
 * {Optional Chaning}: Istege bagli zincirleme
 * *Yuvarlanmis Nesne erisiminde kullanilan guvenli bir yoldur
 * *Bir API cekerken eger API bos cikarsa kodun patlamamasi icin kullanilan kontrol mekanizmasidir
 * !Optional Chaning uc bicimi mevuct:
 *  1- obj?.prop >> obj.prop varsa donderir aksi halde undefined donderir
 *  2- obj?.[prop] >> obj[prop] varsa doner akisi halde undefined donderiri
 *  3- obj.method?.() >> obj.method() varsa doner aksi halde undfined donderir
 */

const result = {
  name: 'Muhammet Cokyaman',
  office: {
    primary: {
      city: 'İstanbul',
      age: 21,
      born: 'Wan'
    }
  }
}

// 1-way / no control
const city1 = result.office.surname
console.log(city1) // Uncaught TypeError: Cannot read property

//2-way / if control
let city2
if (result) {
  const office = result.office
  if (office) {
    const primary = result.office.primary
    if (primary) {
      city2 = primary.city
    }
  }
}
console.log(city2)

//3-way / && (locigal expression)control
const city3 =
  result && result.office && result.office.primary && result.office.primary.city

console.log(city3)

//4-way / Ternary Operator 
const city4 = !result
    ? undefined
    : !result.office
        ? undefined
        : !result.office.primary
            ?undefined
            :!result.office.primary.city
                ?undefined
                :result.office.primary.city
console.log(city4)

//5-way / Try-Catch
let city5
try {
    city5 = result.office.primary.city
} catch (error) {
    city5 = null
}

console.log(city5)

//6-way / Optional Chaning
//===========OPTIONAL CAHANING============================================
const city6 = result?.office?.primary?.city
console.log(city6)




