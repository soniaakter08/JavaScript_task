/* 
Write a function named calculateAverageUntilZero:
- Continuously prompt the user to input numbers.
- Stop asking for inputs when the user enters 0.
- Calculate and log the average of all entered numbers in the console once the loop ends.
 */
const calculateAverageUntilZero = () => {
  let sum = 0;
  let count = 0;
  let average;
  let getNumber;
  let numberArray = [];
  while (getNumber !== 0) {
    let getNumber = Number(window.prompt("Enter the number:"));

    if (getNumber == 0) {
      break;
    }
    numberArray.push(getNumber);
    count++;
    sum = sum + getNumber;
    average = sum / count;
  }
  console.log("Average is:", average);
  console.log("count:", count);
  console.log("sum:", sum);
  console.log("All number:", numberArray);
};
calculateAverageUntilZero();
