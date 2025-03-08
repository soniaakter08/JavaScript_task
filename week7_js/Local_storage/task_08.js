/* Task 8
Create a counter object with:
- `count` (starting at 0)
Store it in LocalStorage.
Write a function `incrementCounter()` that:
- Retrieves the counter.
- Increases `count` by 1.
- Saves the updated counter.
- Logs the new count.
*/

// Your code here

const counter = { count: 0 };
localStorage.setItem("counter", JSON.stringify(counter));

function incrementCounter() {
  const storedCounter = JSON.parse(
    localStorage.getItem("counter") || `{"count":0}`
  );

  storedCounter.count++;
  localStorage.setItem("counter", JSON.stringify(storedCounter));
  console.log("Update counter:", storedCounter.count);
}

incrementCounter();
