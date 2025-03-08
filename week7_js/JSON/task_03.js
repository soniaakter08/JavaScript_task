/* Task 3
Create an array named `classroom`, where each element is an object representing a student.
Each student object should have properties for `name`, `age`, and `grade`.
Convert the array into a JSON string and log it to the console.
*/

// Your code here
const classrooms = [
  { name: "Jhon", age: 30, grade: "A" },
  { name: "Doe", age: 30, grade: "B" },
  { name: "roky", age: 30, grade: "C" },
  { name: "Juni", age: 30, grade: "A" },
];
const jsonArray = JSON.stringify(classrooms);
console.log("The json array is:", jsonArray);
