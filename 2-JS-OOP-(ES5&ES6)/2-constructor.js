// Constructor ES5
function Book(title, author, year) {
  this.title = title; // this. going to refer ->
  this.author = author;
  this.year = year;

  this.getSummery = function() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  };
}

// Instantiate(инициализировать/создавать экземпляр) an Object
// When you instantiate it's run
const book1 = new Book("Book One", "Roman Frodo", "2012"); // -> here
const book2 = new Book("Book Two", "Roman Bilbo", "2013"); // -> or here

console.log(book2);
