/* Task 5
Create an object `product` with `name`, `price`, and `quantity`.
Add an input field in HTML where the user can enter a quantity to purchase.
Update the `quantity` property and display the total price dynamically.
*/

// Your code here

const product = {
  name: "Laptop",
  price: 500,
  quantity: 1,
};
const quantityInput = document.getElementById("quantity");
const totalPriceDisplay = document.getElementById("productPrice");

function updateTotalPrice() {
  product.quantity = parseInt(quantityInput.value);
  const totalPrice = product.price * product.quantity;
  totalPriceDisplay.textContent = totalPrice;
}

quantityInput.addEventListener("input", updateTotalPrice);
updateTotalPrice();
