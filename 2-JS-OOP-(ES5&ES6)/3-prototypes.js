// Constructor ES5
function Book(title, author, year) {
  this.title = title; // this. going to refer ->
  this.author = author;
  this.year = year;
}

// getSummery - Prototype
Book.prototype.getSummery = function() {
  return `${this.title} was written by ${this.author} in ${this.year}`;
};

// getAge
Book.prototype.getAge = function() {
  const years = new Date().getFullYear() - this.year;
  return `${this.title} is ${years} years old`;
};

// Revise / Change Year
Book.prototype.revise = function(newYear) {
  this.year = newYear;
  this.revised = true;
};

// Instantiate(инициализировать/создавать экземпляр) an Object
// When you instantiate it's run
const book1 = new Book("Book One", "Roman Frodo", "2012"); // -> here
const book2 = new Book("Book Two", "Roman Bilbo", "2013"); // -> or here

console.log(book2.getAge());

console.log(book2);
book2.revise("2018");
console.log(book2);
