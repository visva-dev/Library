class Book {
  constructor(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
  }
}

class Browser {
  static displayBooks() {
    const AddedBooks = [
      {
        title: 'Books One',
        author: 'Book one author',
        pages: 500,
      },
      {
        title: 'Book Two title',
        author: 'Book two author',
        pages: 200,
      },
    ];
    const books = AddedBooks;
    books.forEach((book) => Browser.AddBookToList(book));
  }

  static AddBookToList(book) {
    const list = document.querySelector('#book-list');
    const row = document.createElement('tr');

    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.pages}</td>
    <td><button>Delete</button></td>
    `;
    list.appendChild(row);
  }
}

document.addEventListener('DOMContentLoaded', Browser.displayBooks);