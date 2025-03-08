/* Task 1
Store a string `"Hello, LocalStorage!"` in LocalStorage under the key `"message"`.
Retrieve it and log it to the console.
*/

// Your code here

localStorage.setItem("message", "Hello, LocalStorage!");

const retrievedMessage = localStorage.getItem("message");

console.log(retrievedMessage);
