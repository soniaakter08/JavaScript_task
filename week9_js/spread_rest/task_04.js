/* Task 4: Fix Function with Rest Operator  
Make the function work for any number of numbers.  
*/

function sumNumbers(...numbers) {
  return numbers.reduce((acc, current) => acc + current, 0);
}

console.log(sumNumbers(2, 3, 4)); // Expected: 9
