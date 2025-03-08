// Exercise 14: Find all occurrences of "John" in attendees
let attendees = ["John", "Sarah", "John", "Alex", "John"];

/*
Find all positions where "John" appears in the attendees array.
Expected outcome: [0, 2, 4]
*/
// Write your code here

const johnIndexes = [];
attendees.forEach((name, index) => {
  if (name === "John") {
    johnIndexes.push(index);
  }
});
console.log(johnIndexes);
