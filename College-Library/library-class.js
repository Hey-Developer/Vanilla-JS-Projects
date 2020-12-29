/* 
$ Create a class Library and implement the following-->
  -- A constructor must take the book list as an argument.
  -- getBookList();
  -- issueBook(bookName,user);
  -- returnBook(BookName);
  
*/
// ! Cases i used are camelCase for function and snake_case for variable names
class Library {
    constructor() {
        this.book_list = [];
        this.book_list.push({
            title: "The 4-Hour Work Week",
            author: "Timothy Ferriss",
            genre: "Inspirational",
        });
        this.book_list.push({
            title: "Zero to One",
            author: "Blake Masters",
            genre: "Inspirational",
        });
        this.book_list.push({
            title: "Thinking, Fast and Slow",
            author: "Daniel Kahneman",
            genre: "Inspirational",
        });

        this.issuedBooks = [];
        this.user = [];
    }

    addBookInList(book) {
        this.book_list.push(book);
    }

    showAllBooks() {
        this.book_list.forEach(book => {
            console.log(
                `Book Name: ${book.title}\n Book Author: ${book.author}\n Book Genre: ${book.genre}\n\n`
            );
        });
    }

    showBookListByCategory(category) {
        console.log(`Book With Category: ${category} are listed Below-->\n`);
        this.book_list.forEach(book => {
            if (book.genre === category) {
                console.log(` Book Name: ${book.title}\n Book Author: ${book.author}`);
            }
        });
    }

    userRegistration(name, email, city) {
        this.name = name;
        this.email = email;
        this.city = city;
        console.log(`Welcome ${name} Your are successfull registerd`);
    }

    bookIssue(book_name, person, days) {
        this.issuedBooks.push({
            bookName: book_name,
            issuedBy: person,
            howManyDays: days,
        });
        console.log(
            `Successfully issued Now you can take it home. Have a nice Day and please return this Book before ${days} days.`
        );
    }

    bookReturn(book_name, person) {
        this.issuedBooks.forEach((elm, index) => {
            if (elm.bookName === book_name && elm.issuedBy === person) {
                this.issuedBooks.splice(index, 1);
                console.log(`Thanq for returning Hope you enjoyed it`);
            } else {
                console.log(
                    `You didn't issued this book then how can you return it U stole it.. call the police..`
                );
            }
        });
    }
}

let librarian = new Library();
librarian.showAllBooks();
librarian.addBookInList({
    title: "Rich dad poor dad",
    author: "Robert Kiyosaki",
    genre: "Entrepreneurship",
});

librarian.showBookListByCategory("Inspirational");
librarian.showBookListByCategory("Entrepreneurship");

let cnu = new Library();
cnu.showAllBooks();

cnu.userRegistration("Divyansh", "hey.cnu09@gmail.com", "Indore");

let punit = new Library();

librarian.bookIssue("Rich dad poor dad", "Divyansh", 10);

librarian.bookReturn("Rich dad poor dad", "Divyansh");