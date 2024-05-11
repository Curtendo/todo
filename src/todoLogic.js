import TodoItem from "./todoItem.js";

const myTodos = []

// create todo item
export default function createTodo(newTodoData) {
    const newTodo = new TodoItem(newTodoData);
    myTodos.push(newTodo);
    return newTodo;
}

// Delete todo
function deleteTodo() {

}

// Edit todo

// Toggle Finished

