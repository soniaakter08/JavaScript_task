/* Task 10
Write a function `clearLocalStorage()` that removes all data stored in LocalStorage.
Call it and confirm LocalStorage is empty.
*/

// Your code here

function clearLocalStorage() {
  localStorage.clear();
  console.log("Local storage has been cleared!");
}
clearLocalStorage();
console.log(localStorage);
