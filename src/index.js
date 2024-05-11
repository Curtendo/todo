import './style.css';
import createTodo from './todoLogic';

let newTodoData = {
    title: "Go Home",
    description: "Don't forget to go home!",
    dueDate: "Sept 20, 2024",
    priority: "high",
    project: ""
};

console.log(createTodo(newTodoData));