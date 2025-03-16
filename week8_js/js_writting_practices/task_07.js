/* Task 7: Refactor Unclear Code
/*
Task: Improve this function to make it clear and readable.

Before:
function f(n){return n<0 ? 'negative' : 'positive';}

After:
- Use better naming and proper formatting.
*/

function checkNumber(n) {
  return n < 0 ? "negative" : "positive";
}
console.log(checkNumber(-5));
console.log(checkNumber(10));
