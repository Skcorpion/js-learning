// const s1 = "Hello";
// console.log(typeof s1);

// const s2 = new String("Hello");
// console.log(typeof s2);

// console.log(window); // absolute parent object (don't need write)
// alert(1);
// console.log(navigator.appVersion); // window(object) > navigator(object).appVersion(method)

// Object Literal
const book1 = {
  title: "Book One",
  author: "Roman Frodo",
  year: "2012",
  getSummery: function() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  }
};

console.log(book1.getSummery());
console.log(Object.values(book1)); // Array(4) [ "Book One", "Roman Frodo", "2012", getSummery() ]
console.log(Object.keys(book1)); // Array(4) [ "title", "author", "year", "getSummery" ]
