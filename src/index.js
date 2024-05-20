import './style.css';
import TodoLogic from './todoLogic';
import ProjectLogic from './project.js';
import TodoController from './todoController.js';
import TodoView from './todoView.js';

const todoLogic = new TodoLogic;
const projectLogic = new ProjectLogic;
const view = new TodoView;
const controller = new TodoController(todoLogic, projectLogic, view);

controller.init();