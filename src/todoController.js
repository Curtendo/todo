export default class TodoController {
    constructor(todoLogic, projectLogic, view) {
        this.todoLogic = todoLogic;
        this.projectLogic = projectLogic;
        this.view = view;
    }

    init() {
        this.todoLogic.createTodo({
            title: 'Todo 1',
            description: 'Description for Todo 1',
            dueDate: '2024-05-20',
            priority: 'HIGH',
            project: 'Project 1'
        });

        this.todoLogic.createTodo({
            title: 'Todo 2',
            description: 'Description for Todo 2',
            dueDate: '2024-05-21',
            priority: 'MEDIUM',
            project: 'Project 2'
        });

        this.todoLogic.createTodo({
            title: 'Todo 3',
            description: 'Description for Todo 3',
            dueDate: '2024-05-22',
            priority: 'LOW',
            project: 'Project 3'
        });

        // Default selection to "All"

        // Display todo list
        this.controlTodosDisplay();

        // Display available projects
        this.controlProjectDisplay();

        // Hide details?
        
    }

    controlTodosDisplay() {
        const myTodos = this.todoLogic.getTodos();
        this.view.displayTodoItems(myTodos);
    }

    controlProjectDisplay() {
        const myProjects = this.projectLogic.getProjects();
        this.view.displayProjects(myProjects);
    }
}