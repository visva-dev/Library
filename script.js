class Book {
  constructor(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
  }

  static displayBooks() {
    const AddedBooks = [];
    const books = AddedBooks;
    books.forEach((book) => Book.AddBookToList(book));
  }

  static AddBookToList(book) {
    const list = document.querySelector('#book-list');
    const row = document.createElement('tr');

    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.pages}</td>
    <td>${book.status}</td>
    <td><a href="#" class="delete">Delete</a></td>
    `;
    list.appendChild(row);
  }

  static validButton() {
    const valid = false;
    if (document.getElementsByName('status').checked) {
      valid = true;
    } else {
      valid = false;
    }
  }

  static deleteBook(element) {
    if (element.classList.contains('delete')) {
      element.parentElement.parentElement.remove();
    }
  }

  static clearInputs() {
    document.querySelector('#book-title').value = '';
    document.querySelector('#book-author').value = '';
    document.querySelector('#book-pages').value = '';
  }
}

document.addEventListener('DOMContentLoaded', Book.displayBooks);
document.querySelector('#book-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.querySelector('#book-title').value;
  const author = document.querySelector('#book-author').value;
  const pages = document.querySelector('#book-pages').value;
  const status = document.getElementById('status').value;
  // const correctstatus = document.getElementById('not-read').value;
  // console.log(status).value;
  // console.log(correctstatus).value;
  const book = new Book(title, author, pages, status);

  Book.AddBookToList(book);
  Book.clearInputs();
});

document.querySelector('#book-list').addEventListener('click', (e) => {
  Book.deleteBook(e.target);
});
