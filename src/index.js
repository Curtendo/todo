import './style.css';
import TodoLogic from './todoLogic';
import ProjectLogic from './project.js';
import TodoController from './todoController.js';
import TodoView from './todoView.js';

document.addEventListener('DOMContentLoaded', () => {
    const todoLogic = new TodoLogic();
    const projectLogic = new ProjectLogic();
    const todoView = new TodoView();

    const todoController = new TodoController(todoLogic, projectLogic, todoView);
    todoController.init();
});