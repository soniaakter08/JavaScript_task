/* 
Write a function named countEvenNumbers:
- Prompt the user to input 20 numbers one by one.
- After all numbers are entered, log how many of them were even.
Display the result in the console. 
*/
const countEvenNumbers = () => {
  let count = 0;
  for (i = 1; i <= 20; i++) {
    let number = Number(window.prompt("Enter a number:"));
    if (number % 2 === 0) {
      count++;
      //console.log("Total even number is:", count);
    }
  }
  console.log("Total even number is:", count);
};
countEvenNumbers();
