import { generateUniqueId } from "./utility";

class TodoItem {
    constructor({title, description, dueDate, priority, project}) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.project = project;
        this.id = generateUniqueId();
        this.finished = false;
    }

    toggleFinished() {
        this.finished = !this.finished;
    }
}

export class TodoLogic {
    constructor() {
        this.myTodos = [];
    }

    // create todo item
    createTodo(newTodoData) {  
        const newTodo = new TodoItem(newTodoData);
        this.myTodos.push(newTodo);
        return newTodo;
    }

    // Delete todo
    deleteTodo(gotId) {
        const index = this.myTodos.indexOf(todo => todo.id === gotId);
        if (index !== -1) {
            this.myTodos.splice(index, 1);
        }
    }

    // Edit todo
    updateTodo(gotId, todoData) {
        const index = this.myTodos.indexOf(todo => todo.id === gotId);
        if (index !== -1) {
            this.myTodos[index] = todoData;
        }
    }

    // Toggle Finished
    todoItemToggleFinished(gotId) {
        const index = this.myTodos.indexOf(todo => todo.id === gotId);
        if (index !== -1) {
            this.myTodos[index].toggleFinished();
        }
    }

    // Return todo list
    getTodos() {
        return this.myTodos;
    }
}

