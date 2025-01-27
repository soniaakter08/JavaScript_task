/*
Write a function named isEven:
Take a number as a parameter.
Return true if the number is even, or false if it’s odd.
Call the function with numbers like 4 and 7, and print "The number is even!" or "The number is odd!" based on the result. 
*/

let isEven = (number) => {
  return number % 2 === 0;
};
console.log(isEven(4));
console.log(isEven(7));
