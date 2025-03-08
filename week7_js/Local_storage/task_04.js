/* Task 4
Write a function `saveToLocalStorage(key, object)` that:
- Converts an object to JSON.
- Stores it in LocalStorage under the provided key.
Test it by saving an object and retrieving it.
*/

// Your code here
const userProfile = { name: "Alice", age: 30 };

function saveToLocalStorage(key, object) {
  localStorage.setItem(key, JSON.stringify(object));
}

saveToLocalStorage("userProfile", userProfile);

const retrievedData = JSON.parse(localStorage.getItem("userProfile"));
console.log(retrievedData);
