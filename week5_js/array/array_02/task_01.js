// Exercise 1: Determine array length and conditional check
let myAlphabet = ["A", "B", "C", "D", "E", "F", "G"];

/*
Create a function called myAlphabetLength that logs the length of the myAlphabet array.
If the length is 5 or more, log: "Array length is sufficient".
Otherwise, log: "Array length is too short."
*/
// Write your function here
function myAlphabetLength() {
  if (myAlphabet.length > 5) {
    console.log("Array length is sufficient");
  } else {
    console.log("Array length is too short");
  }
}
myAlphabetLength();
