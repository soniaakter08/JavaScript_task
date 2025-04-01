/* Task 14
Create a constructor function `Book` that takes `title`, `author`, and `pages`.
Create a simple book library that allows users to add books via an HTML form and displays them dynamically.
*/

// Your code here

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

function addBookToList(book) {
  const list = document.getElementById("book-list");
  const listItem = document.createElement("li");
  listItem.textContent = `${book.title} by ${book.author}, ${book.pages} pages`;
  list.appendChild(listItem);
}

document.getElementById("book-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;

  const book = new Book(title, author, pages);
  addBookToList(book);
  document.getElementById("book-form").reset();
});
