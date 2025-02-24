const pancakeType = document.getElementById("type");
const toppings = document.querySelectorAll(".topping");
const extras = document.querySelectorAll(".extra");
const totalPriceDisplay = document.getElementById("totalPriceDisplay");
const priceImage = document.getElementById("totalPrice");

pancakeType.addEventListener("change", calculateTotal);
toppings.forEach((checkbox) =>
  checkbox.addEventListener("change", calculateTotal)
);
extras.forEach((checkbox) =>
  checkbox.addEventListener("change", calculateTotal)
);

function calculateTotal() {
  let totalPrice = parseFloat(pancakeType.value);
  toppings.forEach((checkbox) => {
    if (checkbox.checked) totalPrice += parseFloat(checkbox.value);
  });
  extras.forEach((checkbox) => {
    if (checkbox.checked) totalPrice += parseFloat(checkbox.value);
  });
  updatePriceDisplay(totalPrice);
}

function updatePriceDisplay(price) {
  totalPriceDisplay.textContent = ` ${price} €`;
  priceImage.textContent = ` ${price} €`;
}
