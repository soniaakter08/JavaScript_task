/* Task 8
Create a constructor function `Car` that takes `brand`, `model`, and `year`.
In the constructor, add a method `age()` that calculates the car’s age.
Instantiate a new `Car` and display its age on the webpage.
*/

// Your code here

function Car(brand, model, year) {
  this.brand = brand;
  this.model = model;
  this.year = year;

  this.age = function () {
    const currentYear = new Date().getFullYear();
    return currentYear - this.year;
  };
}

function displayCarAge() {
  const brand = document.getElementById("brand").value;
  const model = document.getElementById("model").value;
  const year = parseInt(document.getElementById("year").value);

  if (!brand || !model || !year) {
    alert("Please fill in all fields.");
    return;
  }

  const myCar = new Car(brand, model, year);
  const carAge = myCar.age();

  const carAgeElement = document.getElementById("carAge");
  carAgeElement.textContent = `${myCar.brand} ${myCar.model} is ${carAge} years old.`;
  carAgeElement.classList.add("show");
}
