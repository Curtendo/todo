import { makeFutureDate, makeNewDate } from "./utility";

export default class TodoController {
    constructor(todoLogic, projectLogic, view) {
        this.todoLogic = todoLogic;
        this.projectLogic = projectLogic;
        this.view = view;

        // Pass controller instance to view instance
        this.view.controller = this;
    }

    init() { 
        // localStorage.clear();
        
        // Load locally stored todos or if none, initialize defaults.
        this.loadOrInitializeTodos();

        // Display todo list
        this.controlTodosDisplay();

        // Display available projects
        this.controlProjectDisplay();
    }

    loadOrInitializeTodos() {
        const storedTodos = localStorage.getItem('myTodos');
        if (storedTodos) {
            this.initSetTodos();
        } else {
            this.initializeDefaultTodos();
        }
    }

    initializeDefaultTodos() {
        const defaultTodos = [
            {
                title: 'Morning Workout',
                description: 'Complete a 30-minute cardio session.',
                dueDate: makeNewDate(),
                priority: 'HIGH',
                project: 'Gym',
            },
            {
                title: 'Team Meeting',
                description: 'Attend the weekly team meeting.',
                dueDate: makeFutureDate(1),
                priority: 'MEDIUM',
                project: 'Work',
            },
            {
                title: 'Project Proposal',
                description: 'Draft and submit the project proposal document.',
                dueDate: makeFutureDate(9),
                priority: 'HIGH',
                project: 'Work',
            },
            {
                title: 'Grocery Shopping',
                description: 'Buy groceries for the week.',
                dueDate: makeFutureDate(3),
                priority: 'LOW',
                project: 'None',
            },
            {
                title: 'Math Homework',
                description: 'Complete the math homework assignment.',
                dueDate: makeFutureDate(20),
                priority: 'HIGH',
                project: 'School',
            },
            {
                title: 'Yoga Class',
                description: 'Attend the evening yoga class.',
                dueDate: makeFutureDate(5),
                priority: 'MEDIUM',
                project: 'Gym',
            },
            {
                title: 'Client Presentation',
                description: 'Prepare slides and present to the client.',
                dueDate: makeFutureDate(13),
                priority: 'HIGH',
                project: 'Work',
            },
            {
                title: 'History Essay',
                description: 'Write and submit the history essay.',
                dueDate: makeFutureDate(7),
                priority: 'MEDIUM',
                project: 'School',
            }
        ]
        defaultTodos.forEach(todo => this.todoLogic.createTodo(todo));
    }

    initSetTodos() {
        // Get local storage todos
        const initTodos = JSON.parse(localStorage.getItem("myTodos"));

        // Create new todoItem objects to get methods back
        initTodos.forEach(todo => this.todoLogic.createTodo(todo));
    }

    controlTodosDisplay() {
        const myTodos = this.todoLogic.getTodos();
        this.view.displayTodoItems(myTodos);
    }

    controlProjectDisplay() {
        const myProjects = this.projectLogic.getProjects();
        this.view.displayProjects(myProjects);
    }

    getFilteredProjects(projectTitle) {
        const myTodos = this.todoLogic.getTodos();
        const filteredTodos = myTodos.filter(todo => todo.project === projectTitle);
        this.view.displayTodoItems(filteredTodos);
    }

    controlGetTodos() {
        return this.todoLogic.getTodos();
    }

    controlGetProjects() {
        return this.projectLogic.getProjects();
    }

    controlCreateTodo(todoData) {
        this.todoLogic.createTodo(todoData);
        this.controlTodosDisplay();
    }

    controlUpdateTodo(todoId, todoData) {
        this.todoLogic.updateTodo(todoId, todoData);
        this.controlTodosDisplay();
    }

    controlCreateProject(projectTitle) {
        this.projectLogic.createProject(projectTitle);
        this.controlProjectDisplay();
    }

    controlGetTodoById(todoId) {
        return this.todoLogic.getTodoById(todoId);
    }

    controlToggleFinished(todoId) {
        this.todoLogic.todoItemToggleFinished(todoId);
        this.controlTodosDisplay();
    }

    controlDeleteTodo(todoId) {
        this.todoLogic.deleteTodo(todoId);
        this.controlTodosDisplay();
    }

    controlRestoreDefaults() {
        localStorage.clear();
        this.todoLogic.clearTodos();
        this.projectLogic.clearProjects();
        this.init();
    }
}