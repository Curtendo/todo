import './style.css';
import { TodoLogic } from './todoLogic';
import { TodoController } from './todoController.js';
import TodoView from './todoView.js';

const logic = new TodoLogic;
const view = new TodoView;
const controller = new TodoController(logic, view);

controller.init();