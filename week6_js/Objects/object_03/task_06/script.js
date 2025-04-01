/* Task 6
Define a `Task` constructor that takes `title`, `description`, and `completed`.
Add a button in HTML that, when clicked, adds a new `Task` object to a `tasks` array and displays it on the page.
*/

// Your code here

class Task {
  constructor(title, description, completed = false) {
    this.title = title;
    this.description = description;
    this.completed = completed;
  }
}

const tasks = [];

function addTask() {
  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  if (!title || !description) {
    alert("Please enter both title and description");
    return;
  }

  const newTask = new Task(title, description);
  tasks.push(newTask);
  displayTasks();

  document.getElementById("title").value = "";
  document.getElementById("description").value = "";
}

function displayTasks() {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    const taskElement = document.createElement("div");
    taskElement.className = "task";
    taskElement.innerHTML = `<strong>${task.title}</strong><p>${task.description}</p>`;
    taskList.appendChild(taskElement);
  });
}
