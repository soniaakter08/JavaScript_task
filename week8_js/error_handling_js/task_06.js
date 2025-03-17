/* Task 6: Save and Retrieve from LocalStorage
/*
Task: Write a function to store an object in **LocalStorage**.
      Then retrieve it and handle errors if JSON is invalid.

Test cases:
saveUser({ name: "Alice", age: 25 }); // Should save user
console.log(getUser()); // Should return saved user object
localStorage.setItem("user", "{ invalid JSON }"); // Simulate corruption
console.log(getUser()); // Should log an error and return null
*/

function saveUser(user) {
  try {
    localStorage.setItem("user", JSON.stringify(user));
  } catch (error) {
    console.log("Error saving user", error.message);
  }
}

function getUser() {
  try {
    const data = localStorage.getItem("user");
    return JSON.parse(data);
  } catch (error) {
    console.log("Error:Invalid JSON Format");
    return null;
  }
}
saveUser({ name: "Alice", age: 25 }); // Should save user
console.log(getUser()); // Should return saved user object
localStorage.setItem("user", "{ invalid JSON }"); // Simulate corruption
console.log(getUser()); // Should log an error and return null
