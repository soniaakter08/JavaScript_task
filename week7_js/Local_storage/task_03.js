/* Task 3
Define an array `favoriteBooks` with at least three book objects (`title` and `author`).
Store the array in LocalStorage.
Retrieve and parse it, then log the titles of all books.
*/

// Your code here

const favoriteBooks = [
  { title: "abc", author: "jhon" },
  { title: "ab", author: "jhoni" },
  { title: "abcd", author: "mac" },
];
localStorage.setItem("favoriteBooks", JSON.stringify(favoriteBooks));

const favoriteBooksObject = JSON.parse(
  localStorage.getItem("favoriteBooks" || "[]")
);

favoriteBooksObject.forEach((book) => {
  console.log(book.title);
});
