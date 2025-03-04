/* Task 1
Create an object `weather` that contains properties `temperature`, `humidity`, and `condition` (e.g., "Sunny", "Rainy").
Write a function that logs `"Take an umbrella!"` if it's rainy.
*/

// Your code here
const weather = { temprature: 20, humidity: 30, condition: "rainy" };
function checkWeather() {
  if (weather.condition === "rainy") {
    console.log("Take an Umbrella!");
  }
}
checkWeather();

/* Task 2
Define an object named `shoppingCart` that contains an array of items.
Each item has `name`, `price`, and `quantity`.
Write a function that calculates the total price of all items in the cart.
*/

// Your code here
const shoppingCart = {
  items: [
    { name: "colddrinks", price: 5, quantity: 3 },
    { name: "chips", price: 10, quantity: 2 },
    { name: "banana", price: 15, quantity: 5 },
  ],
};

function calculateTotalPrice(shoppingCart) {
  return shoppingCart.items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
}

console.log("The total price:", calculateTotalPrice(shoppingCart));

/* Task 3
Create an array of objects named `restaurants`, each with properties `name`, `cuisineType`, and `rating`.
Write a function that returns only the restaurants with a rating of 4 or higher.
*/

// Your code here

const restaurants = [
  { name: "A", cuisineType: "Buffet", rating: 4 },
  { name: "B", cuisineType: "Vegeterian", rating: 5 },
  { name: "C", cuisineType: "Mixed", rating: 3 },
  { name: "D", cuisineType: "Buffet", rating: 2 },
];
restaurants.forEach((restaurants) => {
  if (restaurants.rating >= 4) {
    console.log(restaurants);
  }
});

/* Task 4
Define an object named `bankAccount` with properties `accountHolder`, `balance`, and `transactions` (an array of numbers).
Write a function that calculates the total balance after all transactions.
*/

// Your code here
const bankAccount = {
  accountHolder: "Jhon",
  balance: 1000,
  transactions: [100, -200, 300, 100, -50],
};
function calculateAccountBalance(bankAccount) {
  const totalTransactions = bankAccount.transactions.reduce(
    (sum, transaction) => sum + transaction,
    0
  );
  return bankAccount.balance + totalTransactions;
}
console.log(`The total balance:$ ${calculateAccountBalance(bankAccount)}`);

/* Task 5
Create an array `students` where each student has `name`, `scores` (array of numbers), and `averageScore` (initially null).
Write a function that calculates and updates each student's `averageScore`.
*/

// Your code here
const students = [
  { name: "Alice", scores: [80, 85, 95], averageScore: null },
  { name: "Alice", scores: [80, 75, 90], averageScore: null },
  { name: "Alice", scores: [85, 70, 90], averageScore: null },
];
function calculateAverageScore(students) {
  students.forEach((student) => {
    const totalScore = students.scores.reduce(
      (total, score) => total + score,
      0
    );
    students.averageScore = totalScore / students.score.legth;
  });
  calculateAccountBalance();
}
/* Task 6
Define an array named `courses`, each containing `courseName`, `instructor`, and `studentsEnrolled`.
Write a function that logs the course name of any course with more than 30 students.
*/

// Your code here

const courses = [
  { courseName: "JavaScript", instructor: "Margit", studentsEnroled: 30 },
  { courseName: "HTML", instructor: "Martin", studentsEnroled: 32 },
  { courseName: "CSS", instructor: "Margit", studentsEnroled: 28 },
  { courseName: "UI", instructor: "Elina", studentsEnroled: 25 },
];
courses.forEach((courses) => {
  if (courses.studentsEnroled > 30) {
    console.log("The course name is:", courses.courseName);
  }
});

/* Task 7
Create an object `pet` with properties `species`, `name`, and `isVaccinated`.
Write a function that returns `"Vaccination required"` if the pet is not vaccinated.
*/

// Your code here

const pet = { species: "Birds", name: "Egle", isVaccinaed: false };
function checkVaccination() {
  if (pet.isVaccinaed === false) {
    console.log("vaccination requied");
  }
}
checkVaccination();

/* Task 8
Define an object named `city` with properties `name`, `population`, and `landmark`.
Write a function that logs `"This is a big city!"` if the population exceeds 1,000,000.
*/

// Your code here

const city = { name: "Helsinki", population: 1200000, landmark: "A" };
function checkCity() {
  if (city.population > 1000000) {
    console.log("This is a big city");
  }
}
checkCity();

/* Task 9
Create an array `transactions`, where each transaction is an object with `type` ("credit" or "debit") and `amount`.
Write a function that calculates the total balance after processing all transactions.
*/

// Your code here

const transactions = [
  { type: "credit", amount: 1000 },
  { type: "debit", amount: 300 },
  { type: "debit", amount: 400 },
  { type: "credit", amount: 200 },
];
function calculateTotalAmount() {
  return transactions.reduce((balance, transaction) => {
    return transaction.type === "credit"
      ? balance + transaction.amount
      : balance - transaction.amount;
  }, 0);
}
console.log("Total balance:", calculateTotalAmount(transactions));
/* Task 10
Define an object named `foxPack` containing an array of fox objects.
Each fox has `name`, `age`, and `furColor`.
Write a function that filters out only the foxes that are younger than 2.
*/

// Your code here

const foxPack = {
  foxes: [
    { name: "A", age: 2, furColor: "white" },
    { name: "B", age: 3, furColor: "black" },
    { name: "C", age: 1, furColor: "brown" },
    { name: "D", age: 4, furColor: "black" },
  ],
};
function checkYoungerFox(foxPack) {
  return foxPack.foxes.filter((fox) => fox.age > 2);
}
console.log("Young foxes are:", checkYoungerFox(foxPack));

/* Task 11
Create an object `gameCharacter` with properties `name`, `level`, `health`, and `inventory` (an array).
Write a function that logs all items in the character’s inventory.
*/

// Your code here
const gameCharacter = {
  name: "Aragon",
  level: "10",
  health: "100",
  invetory: ["sword", "sheild", "potion"],
};
function checkGameCharecterInventory(gameCharacter) {
  gameCharacter.invetory.forEach((index, item) => {
    console.log(`${index + 1},${item}`);
  });
}
console.log(gameCharacter.invetory);

/* Task 12
Define an array named `employees`, where each employee has a `name`, `role`, and `workingHours`.
Write a function that finds and logs employees who work more than 40 hours.
*/

// Your code here

const employees = [
  { name: " Jhon", role: "Manager", workingHours: 30 },
  { name: " Ahan", role: "worker", workingHours: 45 },
  { name: " Bob", role: "worker", workingHours: 40 },
];
employees.forEach((employees) => {
  if (employees.workingHours > 40) {
    console.log("This employee work more than 40 hours", employees);
  }
});

/* Task 13
Create an array `musicAlbums` where each album has `title`, `artist`, and `releaseYear`.
Write a function that logs albums released after 2000.
*/

// Your code here

const musicAlbums = [
  { title: "abc", artist: "joh", releaseYear: 2000 },
  { title: "a", artist: "roky", releaseYear: 1994 },
  { title: "ab", artist: "juni", releaseYear: 2002 },
  { title: "c", artist: "rock", releaseYear: 2005 },
];
musicAlbums.forEach((musicAlbums) => {
  if (musicAlbums.releaseYear > 2000) {
    console.log("the album is:", musicAlbums);
  }
});

/* Task 14
Define an array named `cars`, each containing `brand`, `model`, and `horsepower`.
Write a function that finds and returns the car with the highest horsepower.
*/

// Your code here

const cars = [
  { brand: "Tesla", model: "model 1", horsepower: 400 },
  { brand: "BMW", model: "model 2", horsepower: 500 },
  { brand: "Tesla", model: "model 3", horsepower: 300 },
  { brand: "Audi", model: "model 4", horsepower: 450 },
];
function findMaxHorsepower(cars) {
  return cars.reduce(
    (max, car) => (car.horsepower > max.horsepower ? car : max),
    cars[0]
  );
}
console.log("Most Powerfull car is:", findMaxHorsepower(cars));
/* Task 15
Create an array of `airports`, where each airport has `name`, `country`, and `flightsPerDay`.
Write a function that finds the airport with the most daily flights.
*/

// Your code here

const airports = [
  { name: "FinAir", country: "Finland", flightsPerDay: 5 },
  { name: "US bangla", country: "Bangladesh", flightsPerDay: 7 },
  { name: "Qatar airwase", country: "Qatar", flightsPerDay: 4 },
];
function findMostdailyFlight(airports) {
  return airports.reduce(
    (max, flight) => (flight.flightsPerDay > max.flightsPerDay ? flight : max),
    airports[0]
  );
}
console.log("Most daily flights is:", findMostdailyFlight(airports));
