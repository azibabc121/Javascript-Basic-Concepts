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