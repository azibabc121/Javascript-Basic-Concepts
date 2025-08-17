const todos = [
  { id: 1, task: "Learn JavaScript", completed: false },
  { id: 2, task: "Build a to-do app", completed: true },
  { id: 3, task: "Push code to GitHub", completed: false }
];

// Accessing one item
console.log(todos[0].task); 


function printTodo(todo) {
  console.log(`Task: ${todo.task}, Completed: ${todo.completed}`);
}

const myTodo = { id: 10, task: "Drink water", completed: false };

printTodo(myTodo);
