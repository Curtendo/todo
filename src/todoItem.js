import { generateUniqueId } from "./utility";

export default class TodoItem {
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