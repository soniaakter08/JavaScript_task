/* Task 10
Create an object `shoppingList` with an array `items`.
Add an input field and button to allow users to add new items to `items` and display the updated list.
*/

// Your code here

const shoppingList = {
  items: [],
  addItem(item) {
    if (item) {
      this.items.push(item);
      this.displayItems();
    }
  },
  displayItems() {
    const itemListElement = document.getElementById("itemList");
    itemListElement.innerHTML = "";
    this.items.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      itemListElement.appendChild(li);
    });
  },
};
function addItem() {
  const newItem = document.getElementById("newItem").value.trim();

  if (newItem) {
    shoppingList.addItem(newItem);
    document.getElementById("newItem").value = "";
  } else {
    alert("Please enter an item!");
  }
}
shoppingList.displayItems();
