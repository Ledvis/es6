const ages = 100;
const people = ['Zhenya', 'Olga'];

const fullName = people.map(name => `${name} Boss`);

for (name of fullName) {
  console.log(name);
}

let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
console.log(x); // 1
console.log(y); // 2
console.log(z); // { a: 3, b: 4 }