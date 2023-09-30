const LIBRARY = document.querySelector(".library");

class Book extends HTMLElement {
  constructor(author, title, numberOfPages) {
    super();

    this.author = author;
    this.title = title;
    this.numberOfPages = numberOfPages;

    const AUTHOR = document.createElement("h2");
    const TITLE = document.createElement("h1");
    const NUMBER_OF_PAGES = document.createElement("p");

    this.innerHTML = "CUSTOMMMMM";
  }

  displayBooks(MY_LIBRARY) {
    MY_LIBRARY.forEach((currentBook) => {
      const BOOK = document.createElement("div");
      const AUTHOR = document.createElement("h2");
      const TITLE = document.createElement("h1");
      const NUMBER_OF_PAGES = document.createElement("p");
      console.log(currentBook);
      console.log(currentBook.title);

      AUTHOR.textContent = currentBook.author;
      TITLE.textContent = currentBook.title;
      NUMBER_OF_PAGES.textContent = currentBook.numberOfPages;

      AUTHOR.classList.add("text-red-800");
      BOOK.className = "bg-gray-800 mb-9 w-1/4 ";

      BOOK.appendChild(AUTHOR);
      BOOK.appendChild(TITLE);
      BOOK.appendChild(NUMBER_OF_PAGES);
      LIBRARY.appendChild(BOOK);
    });
  }
}

customElements.define("book-item", Book);

export default Book;
