/* Task 8
Define an object named `shoppingCart` with:
- `items` (an array of product objects, each with `name` and `price`)
Convert `shoppingCart` into a JSON string and log it to the console.
*/

// Your code here
const shoppingCart = {
  items: [
    { name: "Mobile", price: 200 },
    { name: "Mac", price: 1200 },
    { name: "Laptop", price: 700 },
  ],
};
const jsonString = JSON.stringify(shoppingCart);
console.log("the JSON string is:", jsonString);
