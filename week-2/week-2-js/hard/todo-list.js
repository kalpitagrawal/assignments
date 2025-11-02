/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor() {
    this.toDoS = [];
  }
  add(todo) {
    this.toDoS.push(todo);
  }
  remove(indexOfTodo) {
    if (indexOfTodo >= 0 && indexOfTodo < this.toDoS.length) {
      this.toDoS.splice(indexOfTodo, 1);
    }
  }
  update(index, updatedTodo) {
    if (index >= 0 && index < this.toDoS.length) {
      this.toDoS.splice(index, 1, updatedTodo);
    }
  }
  getAll() {
    return this.toDoS;
  }
  get(index) {
    if (index >= 0 && index < this.toDoS.length) {
      return this.toDoS[index];
    }
    return null;
  }
  clear() {
    this.toDoS.splice(0, this.toDoS.length);
  }
}

module.exports = Todo;
