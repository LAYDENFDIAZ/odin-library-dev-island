import Book from "./book.js";

const LIBRARY = document.querySelector(".library");

const MY_LIBRARY = [];

// function Book(author, title, numberOfPages) {
//   this.author = author;
//   this.title = title;
//   this.numberOfPages = numberOfPages;
// }

function addBookToLibrary(event) {
  LIBRARY.innerHTML = "";
  console.log("FADSFDSFDASFADSF");
  const book = new Book("LAYDEN", "ANYTHING", 3);
  MY_LIBRARY.push(book, book2, book3);

  console.log(MY_LIBRARY);
  book.displayBooks(MY_LIBRARY);
}

window.addBookToLibrary = addBookToLibrary;

// function displayBooks() {
//   LIBRARY.innerHTML = "";

// }
