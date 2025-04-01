/* Task 9
Create an array `users` where each user has `name` and `score`.
Add a button in HTML that sorts the users by score in descending order and updates the displayed list.
*/

// Your code here

let users = [
  { name: "Alice", score: 85 },
  { name: "Bob", score: 92 },
  { name: "Charlie", score: 78 },
  { name: "Diana", score: 95 },
  { name: "Eve", score: 88 },
];

function displayUsers() {
  const userList = document.getElementById("userList");
  userList.innerHTML = "";

  users.forEach((user) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${user.name}: ${user.score}`;
    userList.appendChild(listItem);
  });
}

function sortUsersByScore() {
  users.sort((a, b) => b.score - a.score);
  displayUsers();
}

displayUsers();
