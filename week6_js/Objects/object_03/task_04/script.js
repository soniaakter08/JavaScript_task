/* Task 4
Create an object `counter` with a `value` property.
Add two buttons in HTML: one to increase `value`, another to decrease it.
Display `value` in an HTML element and update it dynamically when buttons are clicked.
*/

// Your code here

let counter = {
  value: 0,
};

function updateCounter() {
  document.getElementById("counterValue").textContent = counter.value;
}

document.getElementById("increaseBtn").addEventListener("click", function () {
  counter.value++;
  updateCounter();
});

document.getElementById("decreaseBtn").addEventListener("click", function () {
  counter.value--;
  updateCounter();
});
