const posts = [
  {
    title: 'post1',
    tags: ['php', 'laravel']
  },
  {
    title: 'post2',
    tags: ['javascript', 'htm5', 'css']
  },
  {
    title: 'post3',
    tags: ['vue', 'react']
  }
]

const allTags = posts.reduce((total, post) => {
  return [...total, ...post.tags]
}, []) //total'in ilk degeri

console.log(allTags) //[ 'php', 'laravel', 'javascript', 'htm5', 'css', 'vue', 'react' ]

//--------------------------------------------------------------------------------

//  Eger degerlerden iki tane varsa ve degerleri gostermek istemiyorsak
const array = ['a', 'a', 'b', 'c', 'g', 'g']
const result = array.reduce((total, item) => {
  if (!total.includes(item)) {
    total.push(item)
  }
  return total
}, [])
console.log(result)
