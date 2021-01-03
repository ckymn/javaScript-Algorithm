// object literals

let user = {
  name: 'crystal',
  age: 30,
  email: 'muhammet@gmail.com',
  location: 'Turkey',
  blogs: [
    { title: 'why mac & cheese rules', like: 30 },
    { title: '10 things to make with marmite', likes: 50 }
  ],

  login: function () {
    console.log('the user logged in')
  },
  logut: function () {
    console.log('the user logged out')
  },
  logBlogsArrow: () => {
    console.log(this) // window
  },
  logBlogs: function () {
    console.log(this) //{user}
  },
  logShow: function () {
    for (const blog of this.blogs) {
      console.log('this user has written the following shows:', blog)
    }
  }
}

console.log(user.name) //crystal
// user.age = 35
console.log(user.age)

console.log(user['name']) //crystal

console.log(typeof user) // Object

user.login() // the user logged in
user.logut() // the user logged out

const name = 'mario'
console.log(user.name) // crystal
user.name = name
console.log(user.name) //mario

console.log(this) // window
user.logBlogsArrow() // window
user.logBlogs() // {user}

user.logShow()
