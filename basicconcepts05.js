///<-----------Closure in javascript---------------->
function outerFunction() {
  let outerVariable = "I'm from outer scope";

  function innerFunction() {
    console.log(outerVariable); // has access
  }

  return innerFunction;
}

const closureFunc = outerFunction();
closureFunc(); // "I'm from outer scope"


function greet(name) {
  return function(message) {
    console.log(`Hi ${name}, ${message}`);
  };
}

const greetAiman = greet("Aiman");
greetAiman("Welcome to GitHub!"); // Hi Aiman, Welcome to GitHub!
function createCounter() {
  let count = 0;

  return function() {
    count++;
    return count;
  };
}

const counter = createCounter();

console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3


function createUser() {
  let name = "SecretUser";

  return {
    getName: function() {
      return name;
    },
    setName: function(newName) {
      name = newName;
    }
  };
}

const user = createUser();
console.log(user.getName()); // SecretUser
user.setName("Aiman");
console.log(user.getName()); // Aiman




const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((acc, curr) => acc + curr, 0);

console.log(sum); // Output: 15


const nested = [[1, 2], [3, 4], [5]];

const flat = nested.reduce((acc, curr) => acc.concat(curr), []);

console.log(flat); // Output: [1, 2, 3, 4, 5]


const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

const count = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});

console.log(count);
// Output: { apple: 3, banana: 2, orange: 1 }



const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5]; // [1, 2, 3, 4, 5]

function sum(...nums) {
  return nums.reduce((acc, val) => acc + val, 0);
}

console.log(sum(1, 2, 3, 4)); // 10


function sum(...nums) {
  return nums.reduce((acc, val) => acc + val, 0);
}

console.log(sum(1, 2, 3, 4)); // 10

