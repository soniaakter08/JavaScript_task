/* Task 1: Fix the Employee Destructuring  
Extract `name` and `position` from the employee object.  
*/

const employee = { name: "Sarah", position: "Manager", department: "HR" };

// Fix this
const { name: fullName, position: jobTitle } = employee;

console.log(fullName, jobTitle); // Expected: "Sarah Manager"
