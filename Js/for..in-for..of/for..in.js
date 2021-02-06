const object = { a: 1, b: 2, c: 3 };
for (const key in object) {
  console.log(`${key} ${object[key]}`);
}

/**
    a 1
    b 2
    c 3
 */

const persons = { isim: "mami", age: 21, language: "kurdish" };
for (const key in persons) {
  console.log(`${key} : ${persons[key]}`);
}
