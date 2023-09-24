const myLibrary = [];

function Book(author, title, numberOfPages) {
  this.author;
  this.title;
  this.numberOfPages;
}

function addBookToLibrary() {
  // do stuff here
  const book = new Book("blue", "hello", 3);
  myLibrary.push(book);
}

addBookToLibrary();
