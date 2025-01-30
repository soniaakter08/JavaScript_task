/* 
Write a function named checkFoxLover:
Take two parameters: age and likesFoxes.
If age is 18 or older:
Check if likesFoxes is true.
If true, return "You are an adult who likes foxes!"
Otherwise, return "c"
Call the function with different ages and preferences.
 */
let checkFoxLover = (age, likeFoxes) => {
  if (age >= 18 && likeFoxes) {
    return "You are an adult who likes foxes!";
  } else {
    return "c";
  }
};
console.log(checkFoxLover(18, true));
console.log(checkFoxLover(10, true));
console.log(checkFoxLover(10, false));
console.log(checkFoxLover(19, false));
