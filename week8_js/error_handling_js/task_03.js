/* Task 3: Using Finally
/*
Task: Simulate an error, log it, and ensure "Task completed." always runs.

Test cases:
task3(); // Should log an error message and "Task completed."
*/
try {
  function task3() {
    // Your code here
  }
} catch (error) {
  console.log(`Erro cought:${error.message}`);
} finally {
  console.log("Task completed.");
}
