/* 
Write a function named checkAdult:
Take an age as a parameter.
If age is 18 or older, return "You are an adult."
Otherwise, return nothing.
Call the function with different ages and print the result.
 */
const checkAdult = (age) => {
  if (age >= 18) {
    return "you are an adult";
  }
};
console.log(checkAdult(18));
