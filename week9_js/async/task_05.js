/* 
Task 5: Order Processing (Promise Chain)  
---------------------------------------
Convert `processOrderPromise()` to return a promise chain:  
   Wait **2 sec** → Resolve `"Order received"`  
   Wait **3 sec** → Resolve `"Preparing order"`  
   Wait **1 sec** → Resolve `"Order ready for pickup"`  
*/
"use strict";
function processOrderPromise() {
  return new Promise((resolve) =>
    setTimeout(() => resolve("Order received"), 2000))
    .then((message) => {
      console.log(message);
      return new Promise((resolve) =>
        setTimeout(() => resolve("Preparing order"), 3000));
    })
    .then((message) => {
      console.log(message);
      return new Promise((resolve) =>
        setTimeout(() => resolve("Order ready for pickup"), 1000)
      );
    });
}

// Test Case
processOrderPromise().then(console.log);
