/* Task 9
Create an array `tasks`, where each task is an object (`id`, `description`, `completed`).
Save it to LocalStorage.
Write a function `markTaskComplete(taskId)` that:
- Retrieves `tasks` from LocalStorage.
- Finds the task with the given ID and sets `completed` to `true`.
- Saves the updated tasks.
- Logs the updated list.
*/

// Your code here

const tasks = [
  { id: 1, decription: "Buy groceries", completed: false },
  { id: 2, decription: "take brekfast", completed: false },
  { id: 3, decription: "morning walk", completed: false },
];
localStorage.setItem("tasks", JSON.stringify(tasks));

function markTaskComplete(taskId) {
  const storedTasks = JSON.parse(localStorage.getItem("tasks") || []);
  for (let task of storedTasks) {
    if (task.id === taskId) {
      task.completed = true;
    }
  }
  localStorage.setItem("tasks", JSON.stringify(storedTasks));
  console.log(storedTasks);
}
markTaskComplete(1);
