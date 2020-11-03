class Book {
  constructor(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
  }
}

  function displayBooks() {
    const AddedBooks = [];
    const books = AddedBooks;
    books.forEach((book) => AddBookToList(book));
  }

  function AddBookToList(book) {
    const list = document.querySelector('#book-list');
    const row = document.createElement('tr');

    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.pages}</td>
    <td>${book.status}</td>
    <td><a href="#" class="delete">Delete</a></td>
    <td> <button class="btn btn-success" onclick="changest()" > change book status</button></td>
    `;
    list.appendChild(row);
  }

  function changeStatus(e) {
  const index = myLibrary.findIndex((x) => x.id === Number(e.target.className));
  myLibrary[index].readStatus();
}


  // function changeReadStatus(bookIndex) {
  //   const book = new Book(...Object.values(books[bookIndex]));
  //   book.toggleRead();
  //   book[bookIndex] = book;
  //   displayBooks();
  // }

  function deleteBook(element) {
    if (element.classList.contains('delete')) {
      element.parentElement.parentElement.remove();
    }
  }

  function clearInputs() {
    document.querySelector('#book-title').value = '';
    document.querySelector('#book-author').value = '';
    document.querySelector('#book-pages').value = '';
  }

// document.addEventListener('DOMContentLoaded', Book.displayBooks);
document.querySelector('#book-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.querySelector('#book-title').value;
  const author = document.querySelector('#book-author').value;
  const pages = document.querySelector('#book-pages').value;
  const status = document.getElementById('status').value;
  const book = new Book(title, author, pages, status);

  AddBookToList(book);
  clearInputs();
});

document.querySelector('#book-list').addEventListener('click', (e) => {
  deleteBook(e.target);
});
