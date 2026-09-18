class Library {
    constructor() {
        this.books = [];
    }

    addBook(title, author) {
        this.books.push({
            title,
            author,
            borrowed: false
        });
    }

    search(query) {
        const value = query.toLowerCase();

        return this.books.filter(book =>
            book.title.toLowerCase().includes(value) ||
            book.author.toLowerCase().includes(value)
        );
    }

    borrow(title) {
        const book = this.books.find(
            book => book.title.toLowerCase() === title.toLowerCase()
        );

        if (book && !book.borrowed) {
            book.borrowed = true;
            return true;
        }

        return false;
    }

    returnBook(title) {
        const book = this.books.find(
            book => book.title.toLowerCase() === title.toLowerCase()
        );

        if (book && book.borrowed) {
            book.borrowed = false;
            return true;
        }

        return false;
    }

    showBooks() {
        console.log("Library");
        console.log("=======");

        this.books.forEach((book, index) => {
            console.log(
                `${index + 1}. ${book.title} — ${book.author} | ${book.borrowed ? "Borrowed" : "Available"}`
            );
        });
    }
}

const library = new Library();

library.addBook("Clean Code", "Robert Martin");
library.addBook("The Pragmatic Programmer", "David Thomas");
library.addBook("JavaScript: The Good Parts", "Douglas Crockford");
library.addBook("Design Patterns", "Erich Gamma");

library.borrow("Clean Code");

console.log("Search results:");
console.log(library.search("javascript"));

console.log();
library.showBooks();

library.returnBook("Clean Code");

console.log();
console.log("After return:");
library.showBooks();