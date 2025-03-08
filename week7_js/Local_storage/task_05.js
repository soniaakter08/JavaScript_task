/* Task 5
Write a function `getFromLocalStorage(key)` that:
- Retrieves a value from LocalStorage.
- Parses it if it's JSON.
- Logs the retrieved value.
*/

// Your code here

function getFromLocalStorage(key) {
  const data = localStorage.getItem(key);

  try {
    return JSON.parse(data);
  } catch (error) {
    return data;
  }
}
const retrievedValue = getFromLocalStorage("userProfile");
console.log(retrievedValue);
