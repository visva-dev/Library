// This is example use of class
// --------------------------------------
class Book {
  constructor(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
  }
}
// ---------------------------------------


function AddBookToList(book) {
  const list = document.querySelector('#book-list');
  const row = document.createElement('tr');

  row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.pages}</td>
    <td class="bookstatus" id='${book.title}${book.pages}'>${book.status}</td>
    <td><a href="#" class="delete">Delete</a></td>
    <td> <button class="btn btn-success changestatus" value='${book.title}${book.pages}'> change book status</button></td>
    `;
  list.appendChild(row);
}

function displayBooks() {
  const AddedBooks = [];
  const books = AddedBooks;
  books.forEach((book) => AddBookToList(book));
}

function deleteBook(element) {
  if (element.classList.contains('delete')) {
    element.parentElement.parentElement.remove();
  }
}

function change(e) {
  const rr = document.getElementById(e.target.value);
  if (rr.innerHTML === 'Read') {
    rr.innerHTML = 'Not-Read';
  } else {
    rr.innerHTML = 'Read';
  }
}

function clearInputs() {
  document.querySelector('#book-title').value = '';
  document.querySelector('#book-author').value = '';
  document.querySelector('#book-pages').value = '';
}

document.querySelector('#book-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.querySelector('#book-title').value;
  const author = document.querySelector('#book-author').value;
  const pages = document.querySelector('#book-pages').value;
  const status = document.getElementById('status').value;
  const book = new Book(title, author, pages, status);

  AddBookToList(book);
  const butts = document.querySelectorAll('.changestatus');
  butts.forEach((button) => {
    button.addEventListener('click', (e) => {
      change(e);
    });
  });
  clearInputs();
});
document.querySelector('#book-list').addEventListener('click', (e) => {
  deleteBook(e.target);
  displayBooks();
});
