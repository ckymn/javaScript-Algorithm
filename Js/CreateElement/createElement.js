const liter = document.createElement('li')
const ulter = document.createElement('ul')
const link = document.createElement('a')
//class create
liter.className = 'listItem'
//id create
liter.id = 'listId'
//nitelik (attribute) atamasi
liter.setAttribute('title','toggle')
//text create
liter.appendChild(document.createTextNode('Hello Word.I am Mami...'))

console.log(liter)

// li transfer ul
ulter.appendChild(liter)
// classname
ulter.className='ulterItem'
//id degeri vermek
ulter.id = 'ulterId'
//text create
ulter.appendChild(document.createTextNode('Hello '))

// a create link 
ulter.appendChild(link)
link.className = 'linkname'
link.id = 'linkId'
link.setAttribute('title','toggle')
link.innerHTML = '<span> 10 </span>'


console.log(ulter)








