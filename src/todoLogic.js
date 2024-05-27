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

export default class TodoLogic {
    constructor() {
        this.myTodos = [];
    }

    // Return todo list
    getTodos() {
        return this.myTodos;
    }

    // create todo item
    createTodo(newTodoData) {  
        const newTodo = new TodoItem(newTodoData);
        this.myTodos.push(newTodo);
        return newTodo;
    }

    // Delete todo
    deleteTodo(gotId) {
        const index = this.myTodos.findIndex(todo => todo.id === gotId);
        if (index !== -1) {
            this.myTodos.splice(index, 1);
        }
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
            todo.dueDate = todoData.dueDate;
            todo.priority = todoData.priority;
            todo.project = todoData.project;
        }
    }

    // Toggle Finished
    todoItemToggleFinished(gotId) {
        const todo = this.myTodos.find(todo => todo.id === gotId);
        if (todo) {
            todo.toggleFinished();
        }
    }
}

