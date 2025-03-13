/* Task 13: Debug LocalStorage Data Saving  
Should save a user object to LocalStorage and retrieve it.  
*/

function saveUser(user) {
  localStorage.setItem("user", JSON.stringify(user));
}

function getUser() {
  return JSON.parse(localStorage.getItem("user"));
}

// Debug & Test
saveUser({ name: "Alice", age: 25 });
console.log(getUser()); // Expected: { name: "Alice", age: 25 }
