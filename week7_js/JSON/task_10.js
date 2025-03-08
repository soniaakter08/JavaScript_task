/* Task 10
Create an object named `gameProgress` with:
- `level`
- `score`
- `livesRemaining`

Convert the object into a JSON string and log it.
Parse the JSON back into an object and update the `score` property by adding 100 points.
Log the updated object.
*/

// Your code here

const gameProgress = { level: 10, score: 1000, livesRemaining: 3 };

const jsonString = JSON.stringify(gameProgress);
console.log("The json String is:", jsonString);

const gameProgressObject = JSON.parse(jsonString);

gameProgressObject.score += 100;

console.log("The updated object is:", gameProgressObject);
