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
        this.todoLogic.createTodo({
            title: 'Morning Workout',
            description: 'Complete a 30-minute cardio session.',
            dueDate: makeNewDate(),
            priority: 'HIGH',
            project: 'Gym',
        });
    
        this.todoLogic.createTodo({
            title: 'Team Meeting',
            description: 'Attend the weekly team meeting.',
            dueDate: makeFutureDate(1),
            priority: 'MEDIUM',
            project: 'Work',
        });
    
        this.todoLogic.createTodo({
            title: 'Project Proposal',
            description: 'Draft and submit the project proposal document.',
            dueDate: makeFutureDate(9),
            priority: 'HIGH',
            project: 'Work',
        });
    
        this.todoLogic.createTodo({
            title: 'Grocery Shopping',
            description: 'Buy groceries for the week.',
            dueDate: makeFutureDate(3),
            priority: 'LOW',
            project: 'None',
        });
    
        this.todoLogic.createTodo({
            title: 'Math Homework',
            description: 'Complete the math homework assignment.',
            dueDate: makeFutureDate(20),
            priority: 'HIGH',
            project: 'School',
        });
    
        this.todoLogic.createTodo({
            title: 'Yoga Class',
            description: 'Attend the evening yoga class.',
            dueDate: makeFutureDate(5),
            priority: 'MEDIUM',
            project: 'Gym',
        });
    
        this.todoLogic.createTodo({
            title: 'Client Presentation',
            description: 'Prepare slides and present to the client.',
            dueDate: makeFutureDate(13),
            priority: 'HIGH',
            project: 'Work',
        });
    
        this.todoLogic.createTodo({
            title: 'History Essay',
            description: 'Write and submit the history essay.',
            dueDate: makeFutureDate(7),
            priority: 'MEDIUM',
            project: 'School',
        });

        // Display todo list
        this.controlTodosDisplay();

        // Display available projects
        this.controlProjectDisplay();
        
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
}