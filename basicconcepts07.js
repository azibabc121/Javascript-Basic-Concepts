// ...existing code...

// --- New Concept: Rest Parameters and Spread Operator ---

// Rest parameters: collect all arguments into an array
function sumAll(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}
console.log(sumAll(1, 2, 3, 4)); // 10

// Spread operator: expand elements of an array/object
const arr1 = [1, 2, 3];
const arr2 = [4, 5];
const combined = [...arr1, ...arr2];
console.log(combined); // [1, 2, 3, 4, 5]



function normalFunction(a, b) {
    return a + b;
}

const arrowFunction = (a, b) => a + b;

console.log("Normal Function (2+3):", normalFunction(2, 3));
console.log("Arrow Function (2+3):", arrowFunction(2, 3));

const square = x => x * x;
console.log("Square of 4:", square(4));

const person = {
    name: "Alice",
    hobbies: ["Reading", "Coding", "Music"],

    showHobbiesNormal: function() {
        console.log("\nNormal Function Example:");
        this.hobbies.forEach(function(hobby) {
            console.log(this.name, "likes", hobby);
        });
    },

    showHobbiesArrow: function() {
        console.log("\nArrow Function Example:");
        this.hobbies.forEach(hobby => {
            console.log(this.name, "likes", hobby);
        });
    }
};

person.showHobbiesNormal();
person.showHobbiesArrow();

try {
    const Arrow = () => {};
    const obj = new Arrow();
} catch (error) {
    console.log("\nError when using arrow function as constructor:", error.message);
}


// Before refactor
function createCard(id, value) {
  return {
    id: id,
    value: value,
    isFlipped: false,
  };
}

// After refactor with shorthand + computed property names
function createCard(id, valueKey) {
  return {
    id,                  // object shorthand
    [valueKey]: true,    // computed property name
    isFlipped: false,
  };
}

// Usage
const card = createCard(1, "matched");
console.log(card);
// { id: 1, matched: true, isFlipped: false }


