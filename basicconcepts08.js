// --- New Concept: Classes & Inheritance ---

// Base class (can act like "abstract" using new.target)
class Shape {
  constructor(name) {
    if (new.target === Shape) {
      throw new Error("Shape is abstract and cannot be instantiated directly.");
    }
    this.name = name;
  }

  // Instance method (meant to be overridden)
  area() {
    throw new Error("area() must be implemented by subclasses.");
  }

  // Polymorphic method
  describe() {
    return `${this.name} with area ${this.area()}`;
  }

  // Static utility (doesn't need an instance)
  static compareArea(a, b) {
    return a.area() - b.area();
  }
}

// Rectangle extends Shape
class Rectangle extends Shape {
  #width;  // private fields
  #height;

  constructor(width, height) {
    super("Rectangle");
    this.#width = width;
    this.#height = height;
  }

  // getters/setters demonstrate encapsulation
  get width() {
    return this.#width;
  }
  set width(value) {
    if (value <= 0) throw new Error("Width must be positive.");
    this.#width = value;
  }

  get height() {
    return this.#height;
  }
  set height(value) {
    if (value <= 0) throw new Error("Height must be positive.");
    this.#height = value;
  }

  // override
  area() {
    return this.#width * this.#height;
  }

  // override with super usage
  describe() {
    return `${super.describe()} (w=${this.#width}, h=${this.#height})`;
  }
}

// Circle extends Shape
class Circle extends Shape {
  #r;

  constructor(r) {
    super("Circle");
    this.#r = r;
  }

  get radius() {
    return this.#r;
  }
  set radius(value) {
    if (value <= 0) throw new Error("Radius must be positive.");
    this.#r = value;
  }

  // override
  area() {
    return Math.PI * this.#r * this.#r;
  }

  describe() {
    return `${super.describe()} (r=${this.#r})`;
  }
}

// --- Another simple inheritance chain ---

class Employee {
  constructor(name) {
    this.name = name;
  }
  info() {
    return `Employee: ${this.name}`;
  }
}

class Manager extends Employee {
  constructor(name, teamSize = 0) {
    super(name);
    this.teamSize = teamSize;
  }
  // override
  info() {
    return `Manager: ${this.name} (team: ${this.teamSize})`;
  }
  // static factory
  static fromEmployee(emp, teamSize = 0) {
    return new Manager(emp.name, teamSize);
  }
}

// --- Mix-in style helper (optional pattern) ---
const Auditable = Base =>
  class extends Base {
    setAuditTag(tag) {
      this.auditTag = tag;
    }
    getAuditTag() {
      return this.auditTag ?? "N/A";
    }
  };

// class SecureRectangle extends Auditable(Rectangle) {}
// class SecureCircle extends Auditable(Circle) {}

// // --- Usage / Demo ---

// try {
//   // const s = new Shape("oops"); // will throw
// } catch (e) {
//   console.log("Abstract instantiation error:", e.message);
// }

// const r = new SecureRectangle(10, 5);
// const c = new SecureCircle(7);

// r.setAuditTag("rect-001");
// c.setAuditTag("circle-001");

// console.log(r.describe()); // Rectangle details with area
// console.log(c.describe()); // Circle details with area

// console.log("Rectangle area:", r.area());
// console.log("Circle area:", c.area());

// console.log("Compare area (r vs c):", Shape.compareArea(r, c)); // negative if r < c

// // Test setters/getters & validation
// r.width = 12;
// r.height = 6;
// console.log("Updated rectangle area:", r.area());

// // Polymorphism in action
// const shapes = [r, c, new Circle(2), new Rectangle(3, 3)];
// shapes.sort(Shape.compareArea); // uses the same static compare on different subclasses
// console.log("\nSorted by area (small -> large):");
// shapes.forEach(s => console.log(s.describe()));

// // Employee/Manager demo
// const e = new Employee("Alice");
// const m = new Manager("Bob", 4);
// const m2 = Manager.fromEmployee(e, 2);

// console.log("\nPeople:");
// console.log(e.info());
// console.log(m.info());
// console.log(m2.info());

// // Audit tags
// console.log("\nAudit tags:");
// console.log("SecureRectangle tag:", r.getAuditTag());
// console.log("SecureCircle tag:", c.getAuditTag());
