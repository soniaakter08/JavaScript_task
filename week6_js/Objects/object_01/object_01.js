/* Task 1
Create a JavaScript array named `library` that represents a collection of books.
Each book should have properties for `title`, `author`, and `yearPublished`.
Add at least two book objects to this collection.
*/
// Your code here

const library = [
  { title: "Always Running", author: "Luis J. Rodriguez", yearPublished: 2008 },
  { title: "Hatchet", author: "Gary Paulsen", yearPublished: 2008 },
  { title: "Hatchet", author: "Gary Paulsen", yearPublished: 2008 },
];

/* Task 2
  Access the `title` of the first book in the `library` collection and log it to the console.
  Modify the `yearPublished` for the second book in the collection to a new year, then log the updated book object to the console.
  */

console.log(library[0].title);
library[1].yearPublished = 2014;
console.log(`The modified year is : ${library[1].yearPublished}`);

// Your code here

/* Task 3
  Use dot notation to add a new property `genres` (an array of strings) to the first book in the `library`.
  Use bracket notation to add a boolean property `isAvailable` to the same book, indicating its availability.
  */
// Your code here

library[0].genres = [`history`, `Romance`];
console.log(library[0].genres);
library[0][`isAvailable`] = true;
console.log(library[0]["isAvailable"]);

/* Task 4
  Define a constructor function named `Book` that can create new book objects with properties for `title`, `author`, `yearPublished`, and `genres`.
  Using the `Book` constructor, create a new book object with the provided input values and add it to the `library` collection.
  */
// Your code here
function Book(title, author, yearPublished, genres) {
  this.title = title;
  this.author = author;
  this.yearPublished = yearPublished;
  this.genres = genres;
}
const book = new Book("Paradise lost ", "Milton.jhon", 2012, "crime");
library.push({ ...book });
console.log(library);

/* Task 5
  Write a function named `createBook` that takes parameters for `title`, `author`, `yearPublished`, and `genres` (an array).
  The function should return a new book object with these properties.
  Test `createBook` by creating a new book object with user-provided input and logging the new book object to the console.
  */
// Your code here
function createBook(title, author, yearPublished, genres) {
  return {
    title: title,
    author: author,
    yearPublished: yearPublished,
    genres: genres,
  };
}
const newBook = new createBook("My Journey ", "Abul Kalam A P J", 2023, [
  "crime",
  "Romance",
]);
console.log("New Book: ", newBook);

/* Task 6
  Convert the `library` collection to a JSON string and log it to the console.
  Parse the JSON string back into a JavaScript object and log the first book's title to the console.
  */

// Your code here

const jsonLibrary = JSON.stringify(library);
console.log("JSON string is:", jsonLibrary);

const jsonObject = JSON.parse(jsonLibrary);
console.log("javaScript String is:", jsonObject);
console.log("First Books title is:", library[0].title);

/* Task 7
  Create an array named `students`, where each student has a `name`, `age`, and `grade`.
  Log the name of any student who has a grade higher than 90.
  */
// Your code here

const students = [
  { name: "Suganya", age: 30, grade: 95 },
  { name: "Sonia", age: 29, grade: 80 },
  { name: "Fizza", age: 29, grade: 91 },
];
students.forEach((student) => {
  if (student.grade > 90) {
    console.log(student.name);
  }
});

/* Task 8
  Define an object named `car` with properties for `brand`, `model`, `year`, and `isElectric`.
  Use a function to check if the car is electric. If it is, log `"This car is eco-friendly!"`. Otherwise, log `"This car runs on fuel."`
  */

// Your code here

const car = { brand: "BMW", model: "a033", year: 2008, isElectric: true };
function checkTheCar() {
  if (car.isElectric) {
    console.log("This car is eco_friendly!");
  } else {
    console.log("This car runs on fuel");
  }
}
checkTheCar();

/* Task 9
  Create a `movies` array where each movie is an object with properties for `title`, `director`, and `rating`.
  Write a loop that logs all movie titles with a rating higher than 8.
  */

// Your code here
const movies = [
  { title: "Three Idiots", director: "A", rating: 9 },
  { title: "bbbbb", director: "B", rating: 7 },
  { title: "ccccc", director: "C", rating: 6 },
];
movies.forEach((movie) => {
  if (movie.rating > 8) {
    console.log(movie.title);
  }
});

/* Task 10
  Write a function `findOldestCar` that takes an array of car objects and returns the car with the earliest `year`.
  */

// Your code here
const cars = [
  { brand: "BMW", model: "xyz", year: 2008, isElectric: true },
  { brand: "Audi", model: "abc", year: 2010, isElectric: true },
  { brand: "Tesla", model: "123", year: 2020, isElectric: true },
  { brand: "BMW", model: "a330", year: 2001, isElectric: true },
];

function findOldestCar(cars) {
  if (!Array.isArray(cars) || cars.length === 0) {
    return null;
  }
  return cars.reduce(
    (oldest, car) => (car.year < oldest.year ? car : oldest),
    cars[0]
  );
}
console.log(findOldestCar(cars));

/* Task 11
  Define a `userProfiles` array containing objects representing users.
  Each user should have a `username`, `email`, and `isAdmin` property.
  Write a function that filters and returns only the users who are administrators.
  */

const userProfiles = [
  { username: "Jhon", email: "jhon@gmail.com", isAdmin: true },
  { username: "Bob", email: "bob@gmail.com", isAdmin: false },
  { username: "Rakib", email: "rakib@gmail.com", isAdmin: false },
];
function getAdminUser(userProfiles) {
  return userProfiles.filter((userProfile) => userProfile.isAdmin);
}
console.log(getAdminUser(userProfiles));

// Your code here

/* Task 12
  Define an array named `orders`, where each order contains `orderId`, `customerName`, `totalAmount`, and `status` (either "pending" or "completed").
  Write a function that returns only the completed orders.
  */

// Your code here

const orders = [
  { oredrId: "01", customerName: "Jhon", totalAmount: 30, status: "completed" },
  { oredrId: "02", customerName: "Eric", totalAmount: 20, status: "peding" },
  { oredrId: "03", customerName: "Juni", totalAmount: 25, status: "pending" },
  { oredrId: "04", customerName: "Juha", totalAmount: 35, status: "completed" },
];
const getCompleteOrder = (orders) =>
  orders.filter((order) => order.status === "completed");

console.log(getCompleteOrder(orders));

/* Task 13
  Create an object named `smartphone` with properties for `brand`, `model`, `batteryLife`, and `is5GEnabled`.
  Write a function that logs `"This phone supports 5G!"` if `is5GEnabled` is `true`, otherwise logs `"This phone does not support 5G."`
  */

// Your code here
const smartphone = {
  brand: "iphone",
  model: "16 Promax",
  year: 2024,
  is5GEnabled: false,
};
function checkSmartphone() {
  if (car.is5GEnabled) {
    console.log("This phone supports 5G!");
  } else {
    console.log("This phone does not support 5G.");
  }
}
checkSmartphone();

/* Task 14
  Define an object named `fox` with properties `name`, `age`, and `habitat`.
  Write a function that logs `"This fox is young"` if its age is under 3, `"This fox is an adult"` if 3 or older.
  */

// Your code here
const fox = { name: "Mark", age: 3, habitat: "nothing" };
function checkAdultFox() {
  if (fox.age >= 3) {
    console.log("This fox is an adult!");
  } else {
    console.log("This fox is young!");
  }
}
checkAdultFox();

/* Task 15
  Define an array named `employees`, where each employee has `name`, `position`, and `salary`.
  Write a function that calculates the total salary of all employees in the company.
  */

// Your code here

const employees = [
  { name: "Jhon", position: "Manager", salary: 4000 },
  { name: "Bob", position: "Asistant Manager", salary: 3000 },
  { name: "Juni", position: "Worker", salary: 1500 },
];

const totalCalculateSalary = (employees) =>
  employees.reduce((total, employee) => total + employee.salary, 0);
console.log("Total Salary of employees is:", totalCalculateSalary(employees));
