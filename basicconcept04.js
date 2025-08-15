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

