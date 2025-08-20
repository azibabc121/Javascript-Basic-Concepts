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
