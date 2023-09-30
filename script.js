import Book from "./book.js";

const LIBRARY = document.querySelector(".library");

const MY_LIBRARY = [];

// function Book(author, title, numberOfPages) {
//   this.author = author;
//   this.title = title;
//   this.numberOfPages = numberOfPages;
// }

function addBookToLibrary() {
  const book = new Book("LAYDEN", "ANYTHING", 3);
  const book2 = new Book("you", "ANYTHING", 3);
  const book3 = new Book("me", "ANYTHING", 3);
  MY_LIBRARY.push(book, book2, book3);
  console.log(MY_LIBRARY);

  book.displayBooks(MY_LIBRARY);
}

// function displayBooks() {
//   LIBRARY.innerHTML = "";

// }

addBookToLibrary();
// displayBooks();
