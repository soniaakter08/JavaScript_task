/* Task 6: Create Your Own
Write a function that receives multiple numbers and returns their average using the rest operator.
Test with: `average(10, 20, 30, 40)`. Expected output: `25`.
*/

// Write your code here
function sumNumbers(...numbers) {
  const sum = numbers.reduce((acc, current) => acc + current, 0);
  return sum / numbers.length;
}

console.log(sumNumbers(10, 20, 30, 40)); // Expected output: `25`.
