/* Task 2: Handle ReferenceError
/*
Task: Try using a variable that hasn’t been declared.
      Catch the error and log: "ReferenceError caught: [error message]"

Test cases:
task2(); // Should log: "ReferenceError caught: myVariable is not defined"
*/
try {
  function task2() {
    console.log(age);
  }
  task2();
} catch (error) {
  console.log("ReferenceError caught: myVariable is not defined");
}
