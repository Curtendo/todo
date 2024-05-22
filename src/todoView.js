export default class TodoView {
    constructor() {
        this.mainContainer = document.querySelector(".main-container");
        this.detailContainer = document.querySelector(".detail-container");
        
        this.todoList = document.querySelector(".todo-item-list");

        this.navbarListTimeFilters = document.querySelector("#navbar-list-time-filters");
        this.navbarListProjects = document.querySelector("#navbar-list-projects");

        this.addTodoButton = document.querySelector("#add-todo-button");
        this.addProjectButton = document.querySelector("#add-project-button");

        this.detailFormToHide = document.querySelector("#new-todo-form-to-hide");
        this.projectFormToHide = document.querySelector("#project-form-to-hide-id");
        this.todoConfirmButton = document.querySelector("#todo-confirm-button");
        this.projectConfirmButton = document.querySelector("#project-confirm-button");

        this.initEventListeners();
    }

    initEventListeners() {
        this.navbarListTimeFilters.addEventListener("click", (e) => {
            if (e.target.classList.contains("nav-item")) {
                this.handleTimeFilterClick(e.target);
                console.log(e.target);
            }
        })

        this.navbarListProjects.addEventListener("click", (e) => {
            if (e.target.classList.contains("nav-item")) {
                this.handleProjectClickFilter(e.target);
            }
        })

        this.addTodoButton.addEventListener("click", (e) => {
            this.handleAddTodoButton();
        })

        this.addProjectButton.addEventListener("click", (e) => {
            this.handleAddProjectButton();
        })

        this.todoConfirmButton.addEventListener("click", (e) => {
            this.handleSubmitTodo();
        })

        this.projectConfirmButton.addEventListener("click", (e) => {
            this.handleSubmitProject();
        })

        this.
    }

    handleTimeFilterClick(target) {
        this.clearNavItemSelector();
        this.showNavItemSelector(target);

        // Filter by time code
    }

    handleProjectClickFilter(target) {
        this.clearNavItemSelector();
        this.showNavItemSelector(target);

        // Filter by project code
        const projectTitle = target.textContent;
        this.controller.getFilteredProjects(projectTitle);
    }

    handleAddTodoButton() {
        const formTodoProjectDropdown = document.querySelector("#form-project");
        
        this.hideFormDivs();

        // Display available projects in dropdown
        const myProjects = this.controller.controlGetProjects();
        myProjects.forEach((project) => {
            const selectOption = document.createElement("option");
            selectOption.setAttribute("value", project);
            selectOption.textContent = project;
            formTodoProjectDropdown.appendChild(selectOption);
        })

        this.detailFormToHide.hidden = false;
    }

    handleAddProjectButton() {
        this.hideFormDivs();
        this.projectFormToHide.hidden = false;
    }

    handleSubmitTodo() {
        const todoForm = document.querySelector("#todo-form")
        const formTodoTitle = document.querySelector("#form-title");
        const formTodoDescription = document.querySelector("#form-description");
        const formTodoDate = document.querySelector("#input-date");
        const formTodoPriority = document.querySelector("#form-priority");
        const formTodoProject = document.querySelector("#form-project");
        
        const availableProjects = this.controller.controlGetProjects();
        this.hideFormDivs(); 

        const todoData = {
            title: formTodoTitle.value,
            description: formTodoDescription.value,
            dueDate: formTodoDate.value,
            priority: formTodoPriority.value,
            project: formTodoProject.value
        }

        this.controller.controlCreateTodo(todoData);

        todoForm.reset();
    }

    handleSubmitProject() {
        this.hideFormDivs();
    }

    clearNavItemSelector() {
        const navbarItems = document.querySelectorAll(".nav-item");
        navbarItems.forEach((item) => {
            item.classList.remove("nav-item-selected");
        })
    }

    showNavItemSelector(target) {
        target.classList.add("nav-item-selected");
    }

    hideFormDivs() {
        this.detailFormToHide.hidden = true;
        this.projectFormToHide.hidden = true;
    }

    displayTodoItems(myTodos) {
        this.todoList.innerHTML = "";
        myTodos.forEach((todo) => {
            const todoItem = document.createElement("li");
            todoItem.classList.add("todo-item");

            const checkbox = document.createElement("input");
            checkbox.setAttribute("type", "checkbox");
            checkbox.setAttribute("name", "finished");
            checkbox.setAttribute("id", "finished");
            todoItem.appendChild(checkbox);

            const itemDate = document.createElement("span");
            itemDate.classList.add("item-date");
            itemDate.textContent = todo.dueDate || "No date";
            todoItem.appendChild(itemDate);

            const itemTitle = document.createElement("span");
            itemTitle.classList.add("item-title");
            itemTitle.textContent = todo.title || "No title";
            todoItem.appendChild(itemTitle);

            const itemPriority = document.createElement("span");
            itemPriority.classList.add("priority");
            itemPriority.textContent = todo.priority || "none";
            switch(todo.priority) {
                case "HIGH":
                    itemPriority.classList.add("priority-high");
                    break;
                case "MEDIUM":
                    itemPriority.classList.add("priority-medium");
                    break;
                case "LOW":
                    itemPriority.classList.add("priority-low");
                    break;
                default:
                    break;
            }
            todoItem.appendChild(itemPriority);

            const deleteButton = document.createElement("button");
            deleteButton.setAttribute("type", "button");
            deleteButton.setAttribute("aria-label", "Delete");
            deleteButton.classList.add("delete-button");
            deleteButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="30" height="30">
                    <g transform="translate(1.41 1.41) scale(2.81)">
                        <path d="M76.777 2.881H57.333V2.412C57.333 1.08 56.253 0 54.921 0H35.079c-1.332 0-2.412 1.08-2.412 2.412v0.469H13.223c-1.332 0-2.412 1.08-2.412 2.412v9.526c0 1.332 1.08 2.412 2.412 2.412h63.554c1.332 0 2.412-1.08 2.412-2.412V5.293c0-1.332-1.08-2.412-2.412-2.412z"/>
                        <path d="M 73.153 22.119 H 16.847 c -1.332 0 -2.412 1.08 -2.412 2.412 v 63.057 c 0 1.332 1.08 2.412 2.412 2.412 h 56.306 c 1.332 0 2.412 -1.08 2.412 -2.412 V 24.531 C 75.565 23.199 74.485 22.119 73.153 22.119 z M 33.543 81.32 c 0 1.332 -1.08 2.412 -2.412 2.412 h -2.245 c -1.332 0 -2.412 -1.08 -2.412 -2.412 V 30.799 c 0 -1.332 1.08 -2.412 2.412 -2.412 h 2.245 c 1.332 0 2.412 1.08 2.412 2.412 V 81.32 z M 48.535 81.32 c 0 1.332 -1.08 2.412 -2.412 2.412 h -2.245 c -1.332 0 -2.412 -1.08 -2.412 -2.412 V 30.799 c 0 -1.332 1.08 -2.412 2.412 -2.412 h 2.245 c 1.332 0 2.412 1.08 2.412 2.412 V 81.32 z M 63.526 81.32 c 0 1.332 -1.08 2.412 -2.412 2.412 h -2.245 c -1.332 0 -2.412 -1.08 -2.412 -2.412 V 30.799 c 0 -1.332 1.08 -2.412 2.412 -2.412 h 2.245 c 1.332 0 2.412 1.08 2.412 2.412 V 81.32 z"/>
                    </g>
                </svg>`
            todoItem.appendChild(deleteButton);

            todoItem.setAttribute("data-id", todo.id);

            this.todoList.appendChild(todoItem);
        })
    }

    displayProjects(myProjects) {
        this.navbarListProjects.innerHTML = "";
        myProjects.forEach((project) => {
            const projectNavItem = document.createElement("li");
            projectNavItem.classList.add("nav-item");
            projectNavItem.setAttribute("data-navbar", project);
            projectNavItem.textContent = project;
            this.navbarListProjects.appendChild(projectNavItem);
        })
    }

    
}