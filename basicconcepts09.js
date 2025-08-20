// --- New Concept: Multiple Inheritance (via Mixins) ---

// Base class
class Person {
  constructor(name) {
    this.name = name;
  }
  greet() {
    return `Hello, my name is ${this.name}.`;
  }
}

// Mixin 1: adds canCode behavior
const CanCode = Base => class extends Base {
  code() {
    return `${this.name} is coding...`;
  }
};

// Mixin 2: adds canDesign behavior
const CanDesign = Base => class extends Base {
  design() {
    return `${this.name} is designing...`;
  }
};

// Create a new class combining Person + mixins
class DeveloperDesigner extends CanDesign(CanCode(Person)) {
  constructor(name, skills = []) {
    super(name);
    this.skills = skills;
  }
  showSkills() {
    return `${this.name}'s skills: ${this.skills.join(", ")}`;
  }
}

// Usage
const alice = new DeveloperDesigner("Alice", ["JavaScript", "UI/UX", "React"]);

console.log(alice.greet());         // from Person
console.log(alice.code());          // from CanCode
console.log(alice.design());        // from CanDesign
console.log(alice.showSkills());    // from DeveloperDesigner





// --- New Concept: Debounce Function ---

// debounce utility
function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

// Example usage: simulate a search input
function searchQuery(query) {
  console.log("Searching for:", query);
}

// Wrap searchQuery with debounce (wait 500ms after typing stops)
const debouncedSearch = debounce(searchQuery, 500);

// Simulate user typing
debouncedSearch("J");
debouncedSearch("Ja");
debouncedSearch("Jav");
debouncedSearch("Java");
debouncedSearch("JavaS");
debouncedSearch("JavaSc");
debouncedSearch("JavaScr");
debouncedSearch("JavaScrip");
debouncedSearch("JavaScript");

// Only the last call ("JavaScript") will actually trigger searchQuery 
// after 500ms pause.





// --- New Concept: Static Methods and Properties in Classes ---

class MathUtil {
  // static property
  static PI = 3.14159;

  // static method
  static add(a, b) {
    return a + b;
  }

  static multiply(a, b) {
    return a * b;
  }
}

class Counter {
  // static property shared by all instances
  static count = 0;

  constructor() {
    // increment static counter whenever a new instance is created
    Counter.count++;
  }

  // static method to get count
  static getCount() {
    return Counter.count;
  }
}

// --- Usage ---

// MathUtil: access without creating an instance
console.log("MathUtil.PI:", MathUtil.PI);
console.log("Add (2+3):", MathUtil.add(2, 3));
console.log("Multiply (4*5):", MathUtil.multiply(4, 5));

// Counter: track how many objects created
const c1 = new Counter();
const c2 = new Counter();
const c3 = new Counter();

console.log("Number of Counter instances:", Counter.getCount());

// trying to access static property from instance
console.log("Accessing static from instance (c1.count):", c1.count); // undefined
console.log("Accessing static properly:", Counter.count);
