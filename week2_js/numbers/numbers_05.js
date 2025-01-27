/* 
1. Create a variable num and assign it the value 5.67.
2. Use the Math.round() method to round num to the nearest whole number.
3. Use the Math.floor() method to round it down to the nearest whole number.
4. Use the Math.ceil() method to round it up to the nearest whole number.
5. Print the results using console.log() with messages like: "The rounded value is 6." 
*/

const num = 5.7;
const roundNumber = Math.round(num);
const roundNumberUp = Math.floor(num);
const roundNumberDown = Math.ceil(num);

console.log(`The round value is ${roundNumber}`);
console.log(`The floored value is ${roundNumberUp}`);
console.log(`The ciled value is ${roundNumberDown}`);
