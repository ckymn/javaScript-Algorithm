/**
 * * This fuction will accept details about a person and create an object for them.
 * @param {string} name The person's full name
 * @param {number} age The person's age
 * @param {boolean} isDeveloper Whether or not the person is a developer
 * @returns {Object} The person object
 */
const createPerson = (name, age, isDeveloper) => {
  return {
    name: name,
    age: age,
    isDeveloper: isDeveloper
  }
}

createPerson('Muhammet', 21, true)

class Person {
  /**
   * * This fuction will accept details about a person and create an object for them.
   * @param {string} name The person's full name
   * @param {number} age The person's age
   * @param {boolean} isDeveloper Whether or not the person is a developer
   * @returns {Object} The person object
   */
  constructor (name, age, isDeveloper) {
    this.name = name
    this.age = age
    this.isDeveloper = isDeveloper
  }
}

/**
 * Outputs details about a person
 * @param {Person} person 
 */
const printDetails = (person) =>{
    console.log(`${person.name} is ${person.age} years old and is ${person.isDeveloper}`)
}

/**
 * Gives you numbers.
 * @returns {number[]}
 */
const getNumbers = () =>{
    return [10 ,80 , 210, 150]
}

const numbers = getNumbers()
for (const n of numbers) {
    console.log(n)
}