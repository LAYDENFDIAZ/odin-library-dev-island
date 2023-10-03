import Book from "./book.js";

const LIBRARY = document.querySelector(".library");
const AUTHOR_USER_INPUT = document.querySelector(".author");
const TITLE_USER_INPUT = document.querySelector(".title");
const NUM_OF_PAGES_USER_INPUT = document.querySelector(".numOfPages");

const CREATE_BOOK_BTN = document.querySelector(".createBookBtn");

CREATE_BOOK_BTN.addEventListener("click", () => {
  const author = AUTHOR_USER_INPUT.value.trim();
  const title = TITLE_USER_INPUT.value.trim();
  const length = NUM_OF_PAGES_USER_INPUT.value.trim();

  hideErrorMessages();
  resetInputStyles();

  if (author === "") {
    displayErrorMessage("author-error-message", "Author is required.");
    return;
  }

  if (title === "") {
    displayErrorMessage("title-error-message", "Title is required.");
    return;
  }

  if (length === "") {
    displayErrorMessage(
      "numOfPages-error-message",
      "Number of pages is required."
    );
    return;
  }

  addBookToLibrary(author, title, length);
});

function displayErrorMessage(elementId, message) {
  const errorElement = document.querySelector(`.${elementId}`);
  errorElement.textContent = message;
  errorElement.classList.remove("hidden");
}

function hideErrorMessages() {
  const errorMessages = document.querySelectorAll(".error-message");
  errorMessages.forEach((errorMessage) => {
    errorMessage.textContent = "";
    errorMessage.classList.add("hidden");
  });
}

function resetInputStyles() {
  const inputFields = document.querySelectorAll(".input-container");
  inputFields.forEach((inputField) => {
    inputField.classList.remove("border-red-500");
  });
}

function addBookToLibrary(author, title, length) {
  const book = new Book(author, title, length);
  MY_LIBRARY.push(book);
  displayBooks(MY_LIBRARY.length);

  AUTHOR_USER_INPUT.value = "";
  TITLE_USER_INPUT.value = "";
  NUM_OF_PAGES_USER_INPUT.value = "";
}

function displayBooks() {
  LIBRARY.innerHTML = "";
  MY_LIBRARY.forEach((currentBook, index) => {
    const BOOK = document.createElement("div");
    const AUTHOR = document.createElement("h2");
    const TITLE = document.createElement("h1");
    const NUMBER_OF_PAGES = document.createElement("p");
    const REMOVE_BOOK_BTN = document.createElement("button");
    const TOGGLE_READ_STATUS_BTN = document.createElement("button");

    BOOK.setAttribute("data-index", index);

    AUTHOR.textContent = `AUTHOR: ${currentBook.author}`;
    TITLE.textContent = `TITLE: ${currentBook.title}`;
    NUMBER_OF_PAGES.textContent = `Length: ${currentBook.numberOfPages}`;
    REMOVE_BOOK_BTN.innerText = "REMOVE";
    TOGGLE_READ_STATUS_BTN.innerText = currentBook.isRead
      ? "Mark as Unread"
      : "Mark as Read";

    BOOK.className =
      "flex flex-col h-64 content-evenly justify-evenly bg-gray-500 mb-9 w-64";

    REMOVE_BOOK_BTN.addEventListener("click", () => removeBook(index));
    TOGGLE_READ_STATUS_BTN.addEventListener("click", () =>
      toggleReadStatus(index)
    );

    AUTHOR.className = "text-white";
    TITLE.className = "text-white";
    NUMBER_OF_PAGES.className = "text-white";

    BOOK.appendChild(AUTHOR);
    BOOK.appendChild(TITLE);
    BOOK.appendChild(NUMBER_OF_PAGES);
    BOOK.appendChild(REMOVE_BOOK_BTN);
    BOOK.appendChild(TOGGLE_READ_STATUS_BTN);
    LIBRARY.appendChild(BOOK);
  });
}

function removeBook(index) {
  MY_LIBRARY.splice(index, 1);
  displayBooks();
}

function toggleReadStatus(index) {
  MY_LIBRARY[index].isRead = !MY_LIBRARY[index].isRead;
  displayBooks();
}

const MY_LIBRARY = [];

export { MY_LIBRARY };
