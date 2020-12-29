console.log(`This is console of Cloves Library`);
// Index to count the number of Books as our book is not storing in an array;
// Initially No Books;
let index = 0;

// Constructor
function Book(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
}

// Display Constructor:
function DisplayBook() {}

// Add Methods to display prototype.
DisplayBook.prototype.showBooks = function() {
    let Books = localStorage.getItem("books");
    let bookList;
    if (Books == null) {
        bookList = [];
    } else {
        bookList = JSON.parse(Books); // returns an array
    }
    // Our template;
    let html = "";
    // Source of adding the template;
    let tableBody = document.getElementById("tableBody");

    bookList.forEach(function(book, index) {
        html += `<tr>
                <th scope="row">${index + 1}</th>
                <td>${book.name}</td>
                <td>${book.author}</td>
                <td>${book.type}</td>
                <td><button type="button" class="btn  btn-sm btn-outline-danger" id="${index}" onclick="deleteBook(this.id)">Delete</button></td>
            </tr>
    `;
    });

    tableBody.innerHTML = html;
};
DisplayBook.prototype.clear = function() {
    document.libraryForm.reset();
};

// Implement the validate function
DisplayBook.prototype.validate = function(book) {
    if (book.name.length > 2 && book.author.length && book.type !== undefined) {
        return true;
    } else {
        return false;
    }
};

// Implement the show function
DisplayBook.prototype.show = function(type, msg) {
    let message = document.getElementById("msg");
    message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                            <strong>Message:</strong> ${msg}
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>`;
    setTimeout(() => {
        message.innerHTML = ``;
    }, 2000);
};

// Add Submit Event Listener to the Add Book Button-->
document.libraryForm.addEventListener("submit", addBook);

function addBook(e) {
    e.preventDefault();

    let name = document.libraryForm.bookName.value;
    let author = document.libraryForm.bookAuthor.value;
    let type;
    var ele = document.getElementsByName("bookType");

    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked) {
            type = ele[i].value;
        }
    }
    if (name.value !== "" && author.value !== "" && type !== undefined) {
        // Create a object of type BOOK;
        let book = new Book(name, author, type);
        // Adding to local Storage-->
        let Books = localStorage.getItem("books");
        let bookList;
        if (Books == null) {
            bookList = [];
        } else {
            bookList = JSON.parse(Books); // returns an array
        }
        bookList.push({
            name: book.name,
            author: book.author,
            type: book.type,
        });
        localStorage.setItem("books", JSON.stringify(bookList));

        // Incrementing index as one Book is added;
        index++;

        // Now this book object should be display to user hence -->
        let display = new DisplayBook();

        // A validate fn check the user input in the form.
        if (display.validate(book)) {
            display.showBooks();
            display.clear();
            display.show("success", " Your Book has been successfully Added 😀");
        } else {
            display.show("danger", " Sorry! Please enter  valid Book details 😐");
        }
    } else {
        let message = document.getElementById("msg");
        message.innerHTML = `<div class="alert alert-danger alert-dismissible fade show" role="alert">
                            <strong>Message:</strong> Please Fill Up the fields properly
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>`;
        setTimeout(() => {
            message.innerHTML = ``;
        }, 2000);
    }
}

// Show Books Which are already stored-->
window.addEventListener("load", () => {
    let display2 = new DisplayBook();
    display2.showBooks();
});

// Delete Books from localStorage as well as from display:
function deleteBook(index) {
    // Delete from Local storage:

    let Books = localStorage.getItem("books");
    let bookList;
    if (Books == null) {
        bookList = [];
    } else {
        bookList = JSON.parse(Books); // returns an array
    }
    bookList.splice(index, 1);
    localStorage.setItem("books", JSON.stringify(bookList));

    // Updating UI:
    let display3 = new DisplayBook();
    display3.showBooks();
}