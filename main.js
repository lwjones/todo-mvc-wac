var todoList = {
  todos: ['item 1', 'item 2', 'item 3'],
  displayTodos: function(){
    console.log(this.todos);
  },
  addTodos: function(todo){
    this.todos.push(todo);
    this.displayTodos();
  }
  changeTodo: function(position, newValue){
    this.todos[position] = newValue;
    this.displayTodos();
  }
  deleteTodo: function(position){
    this.todo.splice(position, 1);
    this.displayTodos();
  }
};
