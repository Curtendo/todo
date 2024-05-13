import TodoItem from "./todoItem.js";

const myTodos = []

// create todo item
function createTodo(newTodoData) {
    const newTodo = new TodoItem(newTodoData);
    myTodos.push(newTodo);
    return newTodo;
}

// Delete todo
function deleteTodo(id) {
    const index = myTodos.indexOf(todo => todo.id === id);
    if (index !== -1) {
        myTodos.splice(index, 1);
    }
}

// Edit todo
function updateTodo(id, todoData) {
    const index = myTodos.indexOf(todo => todo.id === id);
    if (index !== -1) {
        myTodos[index] = todoData;
    }
}

// Toggle Finished
function todoItemToggleFinished(id) {
    const index = myTodos.indexOf(todo => todo.id === id);
    if (index !== -1) {
        myTodos[index].toggleFinished();
    }
}

export { createTodo, deleteTodo, updateTodo, todoItemToggleFinished }