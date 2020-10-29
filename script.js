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
document.querySelector('#book-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.querySelector('#book-title').value;
  const author = document.querySelector('#book-author').value;
  const pages = document.querySelector('#book-pages').value;

  const book = new Book(title, author, pages);

  Browser.AddBookToList(book);
})