/* Task 5: Create Your Own
Write a function that receives a `products` array and returns a
comma-separated string of **only in-stock** product names, **uppercase**.
Test with:
`[{ name: "Laptop", stock: 10 }, { name: "Phone", stock: 0 }]`
Expected output: `"LAPTOP"`
*/

// Write your code here

function getInStockProducts(products) {
  return products
    .filter((product) => product.stock > 0)
    .map((product) => product.name.toUpperCase())
    .join(", ");
}

// Test Case
const products = [
  { name: "Laptop", stock: 10 },
  { name: "Phone", stock: 0 },
];

console.log(getInStockProducts(products)); // Expected: "LAPTOP"
