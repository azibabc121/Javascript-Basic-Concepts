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



