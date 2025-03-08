/* Task 5
Create an object named `weatherReport` with the following properties:
- `temperature`
- `humidity`
- `conditions` (e.g., "Sunny", "Rainy")

Convert the object into a JSON string and store it in a variable named `weatherJSON`.
Then, parse the JSON string back into an object and log the `conditions` property.
*/

// Your code here
const weatherReport = { temperature: 20, humidity: 60, condition: "sunny" };

const weatherJSON = JSON.stringify(weatherReport);
const weatherReportObject = JSON.parse(weatherJSON);
console.log("The condition of weather is:", weatherReportObject.condition);
