/* Task 2
Take the JSON string from Task 1 and convert it back into a JavaScript object.
Log the `name` property of the converted object.
*/

// Your code here
const jsonString = '{"name":"John Doe","age":30}';

const studentObject = JSON.parse(jsonString);
console.log("the name of the student:", studentObject.name);
