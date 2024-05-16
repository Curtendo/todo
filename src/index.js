import './style.css';
import { TodoLogic } from './todoLogic';

const todoLogic = new TodoLogic;

let newTodoData = {
    title: "Go Home",
    description: "Don't forget to go home!",
    dueDate: "Sept 20, 2024",
    priority: "high",
    project: ""
};

console.log(todoLogic.createTodo(newTodoData));