// ES6
class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  getSummery() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  }

  getAge() {
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old`;
  }

  revise(newYear) {
    this.year = newYear;
    this.revisited = true;
  }

  // static method
  static topBookStore() {
    return "Bady & Noble";
  }
}

// Instantiate Object
const book1 = new Book("Book One", "Roman Medys", "2013");

console.log(book1);
book1.revise("2018");
console.log(book1);

console.log(Book.topBookStore()); // not book1, only on Book work, because it's 'static'
