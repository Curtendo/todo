import { generateUniqueId, isDate, makeNewDate } from "./utility";

class TodoItem {
    constructor({title, description, dueDate, priority, project, id, finished}) {
        this.title = title;
        this.description = description;
        this.dueDate = isDate(dueDate) ? dueDate : makeNewDate(dueDate);
        this.priority = priority;
        this.project = project;
        this.id = id || generateUniqueId();
        this.finished = finished || false;
    }

    toggleFinished() {
        this.finished = !this.finished;
    }
}

export default class TodoLogic {
    constructor() {
        this.myTodos = [];
    }

    // Return todo list
    getTodos() {
        return this.myTodos;
    }

    clearTodos() {
        this.myTodos = [];
    }

    // create todo item
    createTodo(newTodoData) {  
        const newTodo = new TodoItem(newTodoData);
        this.myTodos.push(newTodo);

        // Store todos with newly added todo
        this.saveToLocal();

        return newTodo;
    }

    // Delete todo
    deleteTodo(gotId) {
        const index = this.myTodos.findIndex(todo => todo.id === gotId);
        if (index !== -1) {
            this.myTodos.splice(index, 1);
        }
        this.saveToLocal();
    }

    // Get todo data by ID
    getTodoById(gotId) {
        const todo = this.myTodos.find(todo => todo.id === gotId);
        if (todo)  {
            return todo;
        }
    }

    // Edit todo
    updateTodo(gotId, todoData) {
        const todo = this.myTodos.find(todo => todo.id === gotId);
        if (todo) {
            todo.title = todoData.title;
            todo.description = todoData.description;
            todo.dueDate = makeNewDate(todoData.dueDate);
            todo.priority = todoData.priority;
            todo.project = todoData.project;
        }
        this.saveToLocal();
    }

    // Toggle Finished
    todoItemToggleFinished(gotId) {
        const todo = this.myTodos.find(todo => todo.id === gotId);
        if (todo) {
            todo.toggleFinished();
        }
        this.saveToLocal();
    }

    // Save myTodos to local storage
    saveToLocal() {
        localStorage.setItem("myTodos", JSON.stringify(this.myTodos));
    }
}

