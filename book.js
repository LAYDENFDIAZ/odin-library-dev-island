class Book extends HTMLElement {
  constructor(author, title, numberOfPages) {
    super();
    this.author = author;
    this.title = title;
    this.numberOfPages = numberOfPages;
    this.isRead = false;
  }

  toggleReadStatus() {
    this.isRead = !this.isRead;
  }
}

customElements.define("book-item", Book);
export default Book;
