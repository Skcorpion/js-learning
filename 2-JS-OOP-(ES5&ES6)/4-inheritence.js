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

// Magazine Constractor
function Magazine(title, author, year, month) {
  Book.call(this, title, author, year);

  this.month = month;
}

// Inherit Prototype
// because getSummety() don't work on it
Magazine.prototype = Object.create(Book.prototype);

// Use Magazine Constractor
Magazine.prototype.constractor = Magazine;

// Instantiate Magazine Object
const mag1 = new Magazine("Mag One", "Roman Foros", "2019", "Jan");

console.log(mag1);
