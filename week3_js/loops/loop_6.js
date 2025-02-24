/* 
Write a function named askToContinue:
- Prompt the user to enter a number.
- Then, ask: "Do you want to continue giving numbers? (y/n)".
- If the user answers "y", ask for another number.
- If the user answers "n", stop asking and log the average of all entered numbers in the console. 
*/
const askToContinue2 = () => {
  let count = 0;
  let sum = 0;
  let answer = "";

  while (answer !== "n") {
    let number = Number(prompt("Please enter a number)"));
    sum += number;
    count++;
    answer = prompt("Do you want to continue giving numbers?");
    if (answer === "n") {
      break;
    }
    if (answer !== "y") {
      alert("Please enter a valid answer (y or n)");
    }
  }
  console.log("Average of entered numbers", sum / count);
};

askToContinue2();
