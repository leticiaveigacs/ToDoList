document.addEventListener("DOMContentLoaded", () => {
    const projectsBox = document.querySelector("#projects .list");
    const projects = [];
    const optionChoose = "<option>Escolha um projecto...</option>";
    const projectList = document.querySelector("#task-project");
    projectList.innerHTML = optionChoose;
 
    document
        .querySelector("#project-new input[type='submit']")
        .addEventListener("click", projectNew);
 
    const tasksStandByBox = document.querySelector("#tasks-standby .list");
    const tasksDoingBox = document.querySelector("#tasks-doing .list");
    const tasksDoneBox = document.querySelector("#tasks-done .list");
 
    document
        .querySelector("#task-new input[type='submit']")
        .addEventListener("click", taskNew);
 
    function projectNew() {
        const projectInputTitle = document.querySelector(
            "#project-new #project-title"
        );
        const projectTitle = projectInputTitle.value;
        const project = document.createElement("li");
        project.textContent = projectTitle;
        projectsBox.appendChild(project);
        projects.push(projectTitle);
        projectListUpdate();
    }
 
    function taskNew() {
        const taskInputTitle = document.querySelector("#task-new #task-title");
        const taskTitle = taskInputTitle.value;
        const task = document.createElement("li");
        const taskTitleSpan = document.createElement("span");
        const taskActions = document.createElement("ul");
        const taskActionStandBy = document.createElement("li");
        const taskActionDoing = document.createElement("li");
        const taskActionDone = document.createElement("li");
 
        taskActionStandBy.textContent = "S";
        taskActionStandBy.setAttribute("action", "standby");
        taskActionStandBy.addEventListener("click", taskStandBy);
 
        taskActionDoing.textContent = "E";
        taskActionDoing.setAttribute("action", "doing");
        taskActionDoing.addEventListener("click", taskDoing);
 
        taskActionDone.textContent = "C";
        taskActionDone.setAttribute("action", "done");
        taskActionDone.addEventListener("click", taskDone);
 
        taskActions.append(taskActionStandBy, taskActionDoing, taskActionDone);
        taskTitleSpan.textContent = taskTitle;
        task.append(taskTitleSpan, taskActions);
        tasksStandByBox.appendChild(task);
    }
 
    function taskStandBy() {
        const task = this.parentNode.parentNode;
        tasksStandByBox.appendChild(task);
    }
 
    function taskDoing() {
        const task = this.parentNode.parentNode;
        tasksDoingBox.appendChild(task);
    }
 
    function taskDone() {
        const task = this.parentNode.parentNode;
        tasksDoneBox.appendChild(task);
    }
 
    function projectListUpdate() {
        projectList.innerHTML = optionChoose;
 
        projects.forEach((project) => {
            const projectItem = document.createElement("option");
            projectItem.textContent = project;
            projectList.appendChild(projectItem);
        });
    }
});