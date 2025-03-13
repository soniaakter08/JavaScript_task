/* 
- Each function is broken—it does not return the expected result.
- Use console.log(), breakpoints, and careful analysis to debug.
- Test each function using the provided test cases.
- Fix the errors and validate the expected output.
*/

"use strict";

/* Task 1: Fix the Greeting Function  
Should return "Hello, [name]!".  
If no name is provided, return "Hello, guest!".  
*/

function greet(name) {
  return "Hello " + name + "!";
}

// Debug & Test
console.log(greet("Alice")); // Expected: "Hello, Alice!"
console.log(greet()); // Expected: "Hello, guest!"
