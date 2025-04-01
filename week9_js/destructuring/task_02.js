/* Task 2: Fix the Array Destructuring  
Extract the first two colors from the colors array.  
*/

const colors = ["red", "blue", "green", "yellow"];

// Fix this
const [primary, secondary, third] = colors;

console.log(primary, secondary, third); // Expected: "red blue"
