/* Task 4
Take the JSON string from Task 3, convert it back into a JavaScript array,
and log the names of all students in the classroom.
*/

// Your code here

const jsonClassrooms =
  '[{"name":"Jhon","age":30,"grade":"A"},{"name":"Doe","age":30,"grade":"B"},{"name":"roky","age":30,"grade":"C"},{"name":"Juni","age":30,"grade":"A"}]';

const classroomObject = JSON.parse(jsonClassrooms);
console.log("The Javascript array is:", classroomObject);
