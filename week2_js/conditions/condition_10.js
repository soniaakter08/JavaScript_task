/* 
Write a function named findFox:
Take two parameters: hasFox and foxName.
If hasFox is true AND foxName equals "Fiona", return "Fiona the fox is here!"
Otherwise, return "No foxes found."
Call the function with different fox names. 
*/

let findFox = (hasFox, foxName) => {
  if (hasFox && foxName === "Fiona") {
    return "Fiona the fox is here!";
  } else {
    return "No foxes found.";
  }
};
console.log(findFox(true, "Fiona"));
console.log(findFox(false, "Fiona"));
console.log(findFox(true, "Fina"));
console.log(findFox(false, "sonia"));
