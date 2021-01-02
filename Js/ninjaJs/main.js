let i
i = i ? (i < 0 ? Math.max(0, len + i) : i) : 0
console.log(i)

const i1 = () => {
  if (true) {
    let j
    if (j < 0) {
      console.log(Math.max(0, len + 1))
    } else {
      return j
    }
    console.log(j)
  } else {
    return 0
  }
}
i1()