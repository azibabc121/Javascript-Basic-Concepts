// Example: Private Fields and Methods in Classes

class BankAccount {
  // Private field
  #balance;

  constructor(owner, initialBalance) {
    this.owner = owner;
    this.#balance = initialBalance;
  }

  // Public method
  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      this.#logTransaction("Deposit", amount);
    }
  }

  // Public method
  withdraw(amount) {
    if (amount > 0 && amount <= this.#balance) {
      this.#balance -= amount;
      this.#logTransaction("Withdraw", amount);
    } else {
      console.log("Insufficient balance!");
    }
  }

  // Public method to check balance
  getBalance() {
    return `Current balance: $${this.#balance}`;
  }

  // Private method
  #logTransaction(type, amount) {
    console.log(`${type} of $${amount} successful. Remaining balance: $${this.#balance}`);
  }
}

const account = new BankAccount("Alice", 1000);

account.deposit(500);   
account.withdraw(300); 
console.log(account.getBalance()); 




// Event Loop and Concurrency Model in JavaScript

console.log("Start");

// Macro-task: setTimeout
setTimeout(() => {
  console.log("setTimeout callback (Macro-task)");
}, 0);

// Micro-task: Promise
Promise.resolve().then(() => {
  console.log("Promise.then callback (Micro-task)");
});

// Normal synchronous code
for (let i = 0; i < 3; i++) {
  console.log("Loop iteration:", i);
}

console.log("End");



function add(a, b, c) {
  return a + b + c;
}

console.log("Normal Function:", add(1, 2, 3));

function curryAdd(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

console.log("Curried Function:", curryAdd(1)(2)(3));

function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    } else {
      return function (...nextArgs) {
        return curried.apply(this, args.concat(nextArgs));
      };
    }
  };
}

function multiply(a, b, c) {
  return a * b * c;
}

const curriedMultiply = curry(multiply);

console.log("Curried Multiply:", curriedMultiply(2)(3)(4));
console.log("Partial Application:", curriedMultiply(2, 3)(4));










// memoization.js

function memoize(fn) {
  const cache = {};
  return function(...args) {
    const key = JSON.stringify(args);
    if (cache[key]) {
      console.log("Fetching from cache:", key);
      return cache[key];
    }
    console.log("Calculating result for:", key);
    const result = fn(...args);
    cache[key] = result;
    return result;
  };
}

// Example: Expensive calculation (factorial)
function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

const memoizedFactorial = memoize(factorial);

console.log(memoizedFactorial(5)); // calculated
console.log(memoizedFactorial(5)); // cached
console.log(memoizedFactorial(6)); // new calculation





// generators.js

function* numberGenerator() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = numberGenerator();

console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); // { value: 3, done: false }
console.log(gen.next()); // { value: undefined, done: true }

// Example use case: Infinite sequence
function* infiniteCounter() {
  let i = 0;
  while (true) {
    yield i++;
  }
}

const counter = infiniteCounter();
console.log(counter.next().value); // 0
console.log(counter.next().value); // 1
console.log(counter.next().value); // 2





// generators.js

function* numberGenerator() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = numberGenerator();

console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); // { value: 3, done: false }
console.log(gen.next()); // { value: undefined, done: true }

// Example use case: Infinite sequence
function* infiniteCounter() {
  let i = 0;
  while (true) {
    yield i++;
  }
}

const counter = infiniteCounter();
console.log(counter.next().value); // 0
console.log(counter.next().value); // 1
console.log(counter.next().value); // 2
