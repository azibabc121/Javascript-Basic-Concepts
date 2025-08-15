// <-----------------------Map in javascript--------------->

const items = ["Pen", "Book", "Mouse"];

const labeled = items.map((item, index) => `${index + 1}. ${item}`);

console.log(labeled); // ["1. Pen", "2. Book", "3. Mouse"]


const prices = [10, 20, 30];

const formattedPrices = prices.map(price => `$${price.toFixed(2)}`);

console.log(formattedPrices); // ["$10.00", "$20.00", "$30.00"]


const students = [
  { name: "Ali", scores: [80, 90, 100] },
  { name: "Zara", scores: [70, 85, 95] },
];

const averageScores = students.map(student => {
  const total = student.scores.reduce((sum, score) => sum + score, 0);
  const avg = total / student.scores.length;
  return { name: student.name, average: avg };
});

console.log(averageScores);
// [{ name: 'Ali', average: 90 }, { name: 'Zara', average: 83.33333333333333 }]





//<----------------- Filter Function in jaavscript------------->

const numbers = [1, 2, 3, 4, 5, 6];

const evenNumbers = numbers.filter(num => num % 2 === 0);

console.log(evenNumbers); // [2, 4, 6]

const words = ['apple', 'banana', 'fig', 'strawberry'];

const longWords = words.filter(word => word.length > 5);

console.log(longWords); // ['banana', 'strawberry']


const users = [
  { id: 1, name: "Ali", active: true },
  { id: 2, name: "Sara", active: false },
  { id: 3, name: "Ahmed", active: true }
];

const activeUsers = users.filter(user => user.active);

console.log(activeUsers);