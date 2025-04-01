/* Task 15
Create an object `foxTracker` with a `foxes` array.
Add an input field and button that allows users to add new foxes (with name and location) to the array.
Display the list of foxes dynamically in an HTML element.
*/

// Your code here

const foxTracker = {
  foxes: [],
  addFox(name, location) {
    const newFox = { name, location };
    this.foxes.push(newFox);
    this.updateFoxList();
  },
  updateFoxList() {
    const list = document.getElementById("fox-list");
    list.innerHTML = "";
    this.foxes.forEach((fox) => {
      const listItem = document.createElement("li");
      listItem.textContent = `${fox.name} - ${fox.location}`;
      list.appendChild(listItem);
    });
  },
};

document.getElementById("fox-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const location = document.getElementById("location").value;
  foxTracker.addFox(name, location);
  document.getElementById("fox-form").reset();
});
