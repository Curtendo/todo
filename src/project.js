export default class ProjectLogic {
  constructor() {
    this.myProjects = ['Work', 'School', 'Gym'];
  }

  getProjects() {
    return this.myProjects;
  }

  clearProjects() {
    this.myProjects = ['Work', 'School', 'Gym'];
  }

  createProject(title) {
    if (!this.myProjects.includes(title)) {
      this.myProjects.push(title);
    }
  }

  deleteProject(title) {
    const index = this.myProjects.findIndex(title);
    this.myProjects.splice(index, 1);
  }
}
