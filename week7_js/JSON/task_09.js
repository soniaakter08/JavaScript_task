/* Task 9
Write a function `totalCartValue(jsonString)` that:
- Takes a JSON string representing a shopping cart.
- Converts it into a JavaScript object.
- Returns the total price of all items in the cart.
*/

// Your code here
const jsonString = `{
"items":[ { "name": "Mouse", "price": 200 },
    { "name": "mac", "price": 1200 },
    { "name": "Laptop", "price": 700 }]

}`;

function totalCartValue(jsonString) {
  const shoppingCart = JSON.parse(jsonString);
  return shoppingCart.items.reduce((total, item) => total + item.price, 0);
}
console.log("Total price is:", totalCartValue(jsonString));
