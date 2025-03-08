/* Task 2
Create an object `userSettings` with:
- `theme` ("dark" or "light")
- `language` ("English", "Spanish", etc.)

Convert it to a JSON string and store it in LocalStorage.
Retrieve it, parse it, and log the `theme` property.
*/

// Your code here

const userSettings = { theme: "dark", language: "English" };

localStorage.setItem("userSettings", JSON.stringify(userSettings));

const storedSettings = JSON.parse(localStorage.getItem("userSettings"));

console.log(storedSettings.theme);
