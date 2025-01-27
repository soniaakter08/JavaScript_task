/* Create a function named cleanAndTransform that:
Takes one parameter, str.
Trims whitespace, converts the string to lowercase, and replaces "powerful" with "amazing".
Returns the transformed string.
Call the function with " JavaScript is powerful! ".
Print the result using console.log().
*/

function cleanAndTransform(str) {
  return str.trim().toLowerCase().replace("powerful", "amazing");
}

// Solution 2: Arrow function
const cleanAndTransformArrow = (str) =>
  str.trim().toLowerCase().replace("powerful", "amazing");

// Test the function
console.log(cleanAndTransform("   JavaScript is powerful!   "));
console.log(cleanAndTransformArrow("   JavaScript is powerful!   "));
