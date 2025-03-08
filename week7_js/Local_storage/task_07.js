/* Task 7
Define an object `shoppingList` with an array `items` (strings).
Save it to LocalStorage.
Write a function `addItemToList(item)` that:
- Retrieves `shoppingList` from LocalStorage.
- Adds a new item.
- Saves the updated list back to LocalStorage.
- Logs the updated list.
*/

// Your code here

const shoppingList = {
  items: ["milk", "apple", "mobile"],
};
localStorage.setItem("shoppingList", JSON.stringify(shoppingList));

function addItemToList(item) {
  const storedList = JSON.parse(
    localStorage.getItem("shoppingList") || `{"items":[]}`
  );

  storedList.items.push(item);

  localStorage.setItem("shoppingList", JSON.stringify(storedList));
  console.log(storedList);
}
addItemToList("butter");
