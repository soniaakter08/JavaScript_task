/* Task 2: Declare Variables Correctly
/*
Task: Declare a constant `MAX_USERS = 100` and a `let` variable `currentUsers = 10`.
      Try changing `MAX_USERS` and catch the error.

Expected:
- The error should be caught and logged.
- `MAX_USERS` should not change.
*/

function task2() {
  const MAX_USERS = 100;
  let currentUsers = 10;

  try {
    MAX_USERS = 200; // Attempt to change a constant
  } catch (error) {
    console.error("Error: Cannot reassign a constant variable.", error);
  }

  console.log(`MAX_USERS: ${MAX_USERS}, currentUsers: ${currentUsers}`);
}
