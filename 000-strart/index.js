function duplicateEncode(word) {
  let wordArr = word.toLowerCase().split("");
  // console.log(wordArr);
  let foundPos = [];

  for (i = 0; i < wordArr.length; i++) {
    let tempPos = wordArr.indexOf(wordArr[i], i + 1);
    if (tempPos !== -1) {
      // foundPos += tempPos;
      foundPos.push(tempPos);
      wordArr[i] = ")";
    } else {
      wordArr[i] = "(";
    }
  }

  for (let i = 0; i < foundPos.length; i++) {
    wordArr[foundPos[i]] = ")";
  }

  // console.log(foundPos);
  return wordArr.join("");
}

// console.log(duplicateEncode("SP@@H@yJk@n@@@@RQ"));

// function duplicateEncode(word) {
//   return word
//     .toLowerCase()
//     .split("")
//     .map(function(item, index, array) {
//       return array.indexOf(item) == array.lastIndexOf(item) ? "(" : ")";
//     })
//     .join("");
// }

function order(words) {
  return words
    .split(" ")
    .sort((a, b) => a.match(/\d/) - b.match(/\d/))
    .join(" ");
}
let words = "is2 Thi1s T4est 3a";

// console.log(order(words));

function nextSq(sq) {
  return Math.sqrt(sq) % 1 ? -1 : Math.pow(Math.sqrt(sq) + 1, 2);
}

// function countBits(n) {
//   n = n.toString(2);
//   let bits = 0;
//   for (i = 0; i < n.length; i++) {
//     if (n[i] == "1") {
//       bits++;
//     }
//   }
//   return bits;
// }

countBits = n =>
  n
    .toString(2)
    .split("0")
    .join("").length;

// console.log(countBits(22));

function validBraces(braces) {
  let tempBraces = [];
  for (i = 0; i < braces.length; i++) {
    if (braces[i] == "(") {
      tempBraces.unshift(")");
    } else if (braces[i] == "{") {
      tempBraces.unshift("}");
    } else if (braces[i] == "[") {
      tempBraces.unshift("]");
    } else if (braces[i] == tempBraces[0]) {
      tempBraces.shift();
    } else return false;
  }
  // console.log(tempBraces);
  return tempBraces.length == 0 ? true : false;
}

// validBraces("([{[]]");
// console.log(validBraces("}([{[]}])"));

function comp(array1, array2) {
  if (array1 == null || array2 == null) return false;
  array1.sort((a, b) => a - b);
  array2.sort((a, b) => a - b);
  return array1.map(v => v * v).every((v, i) => v == array2[i]);
}

let a = [121, 144, 19, 161, 19, 144, 19, 11];
let b = [121, 14641, 20736, 361, 25921, 361, 20736, 361];

// console.log(comp(a, b));

// function expandedForm(num) {
//   let expForm = [];
//   for (let i = num.toString().length; i > 0; i--) {
//     let p = Math.pow(10, i - 1);
//     let n = (Math.trunc(num / p) * p) % Math.pow(10, i);
//     if (n !== 0) expForm.push(n);
//   }
//   return expForm.join(" + ");
// }

const expandedForm = n =>
  n
    .toString()
    .split("")
    .reverse()
    .map((a, i) => a * Math.pow(10, i))
    .filter(a => a > 0)
    .reverse()
    .join(" + ");

// console.log(expandedForm(18084937));

const spinWords = str =>
  str
    .split(" ")
    .map(a =>
      a.length >= 5
        ? a
            .split("")
            .reverse()
            .join("")
        : a
    )
    .join(" ");

// console.log(spinWords("Hey fellow warriors"));

//Morse dictionary
var MORSE_CODE = {
  "....": "H",
  ".": "E",
  "-.--": "Y",
  ".---": "J",
  "..-": "U",
  "-..": "D"
};

decodeMorse = function(morseCode) {
  return morseCode
    .split("   ")
    .map(w =>
      w
        .split(" ")
        .map(l => MORSE_CODE[l])
        .join("")
    )
    .filter(w => w !== "")
    .join(" ");
};

// console.log(decodeMorse("      .... . -.--   .--- ..- -.. ."));

let array1 = [1, 2, 3];

// array1.push(array2);
// console.log(array1);

function tribonacci(signature, n) {
  for (i = 0; i < n - 3; i++) {
    signature.push(
      signature.slice(i, i + 3).reduce((sum, current) => sum + current, 0)
    );
  }
  return signature.slice(0, n);
}

// console.log(tribonacci([1, 1, 1], 10));
// console.log(tribonacci([1, 1, 1], 0));
// console.log(tribonacci([0.5, 0.5, 0.5], 30));

function domainName(url) {
  url = url.replace("https://", "");
  url = url.replace("http://", "");
  url = url.replace("www.", "");
  return url.split(".")[0];
}

// console.log(
//   domainName(
//     "https://www.codewars.com/kata/514a024011ea4fb54200004b/solutions/javascript"
//   )
// );

// Setup
var collection = {
  2548: {
    album: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: ["Let It Rock", "You Give Love a Bad Name"]
  },
  2468: {
    album: "1999",
    artist: "Prince",
    tracks: ["1999", "Little Red Corvette"]
  },
  1245: {
    artist: "Robert Palmer",
    tracks: []
  },
  5439: {
    album: "ABBA Gold"
  }
};

function updateRecords(id, prop, value) {
  if (value == "") {
    delete collection[id][prop];
    console.log("if");
  } else if (prop == "tracks") {
    if (!collection[id].hasOwnProperty(prop)) {
      collection[id][prop] = [];
    }
    collection[id][prop].push(value);
    console.log("if else");
  } else {
    collection[id][prop] = value;
    console.log("else");
  }

  return collection;
}

// console.log(updateRecords(5439, "artist", "ABBA"));

function sum(arr, n) {
  if (n <= 0) {
    return arr[0];
  } else {
    return sum(arr, n - 1) + arr[n];
  }
}
// console.log(sum([2, 3, 4], 2)); //return 9

//Setup
var contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"]
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"]
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"]
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"]
  }
];

function lookUpProfile(name, prop) {
  // Only change code below this line
  for (var i = 0; i < contacts.length; i++) {
    if (contacts[i].firstName === name) {
      return contacts[i][prop] || "No such property";
      // if (contacts[i].hasOwnProperty(prop)) {
      //   return contacts[i][prop];
      // } else {
      //   return "No such property";
      // }
    }
  }
  return "No such contact";
  // Only change code above this line
}

// Change these values to test your function
// console.log(lookUpProfile("Harry", "dog"));

/* Alter code below this line */
class Thermostat {
  constructor(fahrenheit) {
    this.fahrenheit = fahrenheit;
  }

  get temperature() {
    return (5 / 9) * (this.fahrenheit - 32);
  }
  set temperature(celsius) {
    this.fahrenheit = (celsius * 9.0) / 5 + 32;
  }
}
/* Alter code above this line */

const thermos = new Thermostat(76); // setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in C
thermos.temperature = 26;
temp = thermos.temperature; // 26 in C

let users = {
  Alan: {
    age: 27,
    online: true
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sara: {
    age: 48,
    online: true
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function isEveryoneHere(obj) {
  return ["Alan", "Jeff", "Sarah", "Ryan"].every(name =>
    obj.hasOwnProperty(name)
  );
}

// console.log(isEveryoneHere(users));

function countOnline(obj) {
  let count = 0;
  for (let name in obj) {
    if (obj[name]["online"] == true) {
      count++;
    }
  }
  return count;
}

// console.log(
//   countOnline({
//     Alan: { online: true },
//     Jeff: { online: true },
//     Sarah: { online: false }
//   })
// );

//Object.keys()
function getArrayOfUsers(obj) {
  return Object.keys(obj);
}

// console.log(getArrayOfUsers(users)); //["Alan", "Jeff", "Sara", "Ryan"]

// function findLongestWordLength(str) {
//   return str.split(" ").reduce((x, y) => Math.max(x, y.length), 0);
// }

function findLongestWordLength(str) {
  return Math.max(...str.split(" ").map(word => word.length));
}

// console.log(
//   findLongestWordLength("The quick brown fox jumped over the lazy dog")
// );

// function largestOfFour(arr) {
//   let arrMax = [];
//   for (let i = 0; i < arr.length; i++) {
//     arrMax.push(Math.max(...arr[i]));
//   }
//   return arrMax;
// }

function largestOfFour(arr) {
  return arr.map(sub => Math.max(...sub));
}

// console.log(
//   largestOfFour([
//     [4, 6, 1, 3],
//     [13, 27, 18, 26],
//     [32, 35, 37, 39],
//     [1000, 1001, 857, 1]
//   ])
// ); // [6, 27, 39, 1001]

function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor

  return str.slice(str.length - target.length) === target;
}

// console.log(confirmEnding("Bastian", "ian")); //true

function truncateString(str, num) {
  // Clear out that junk in your trunk
  return str.length > num ? `${str.slice(0, num)}...` : str;
}

// console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
// console.log(
//   truncateString(
//     "A-tisket a-tasket A green and yellow basket",
//     "A-tisket a-tasket A green and yellow basket".length + 2
//   )
// );

// function findElement(arr, func) {
//   let num = 0;
//   for (let i = 0; i < arr.length; i++) {
//     num = arr[i];
//     if (func(num)) {
//       return num;
//     }
//   }
// }

function findElement(arr, func) {
  return arr.find(num => func(num));
}

// console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));

function booWho(bool) {
  // What is the new fad diet for ghost developers? The Boolean.
  return typeof bool == typeof true;
}

// console.log(booWho(false));

function titleCase(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map(
      word => word.replace(word.charAt(0), word.charAt(0).toUpperCase())
      // .split("")
      // .map((letter, i, word) => (i == 0 ? word[i].toUpperCase() : letter))
      // .join("")
    )
    .join(" ");
}

// console.log(titleCase("I'm a liTTLe pOnNy")); //I'm A Little Ponny

function bouncer(arr) {
  // return arr.filter(item => item);
  return arr.filter(Boolean);
}

// console.log(bouncer([7, "ate", "", false, 9])); //[ 7, 'ate', 9 ]
// console.log(bouncer([false, null, 0, NaN, undefined, ""])); // []

function getIndexToIns(arr, num) {
  // arr.push(num);
  // return arr.sort((a, b) => a - b).indexOf(num);
  return arr
    .concat(num)
    .sort((a, b) => a - b)
    .indexOf(num);
}

function getIndexToIns(arr, num) {
  return arr.filter(val => num > val).length;
}

// console.log(getIndexToIns([2, 20, 10], 19)); //2

function mutation(arr) {
  return arr[1]
    .toLowerCase()
    .split("")
    .every(letter => arr[0].toLowerCase().indexOf(letter) !== -1);
}

// console.log(mutation(["Hello", "heo"])); // true

function chunkArrayInGroups(arr, size) {
  for (let i = 0; i < arr.length; i++) {
    arr.splice(i, size, arr.slice(i, size + i));
  }
  return arr;
}

// console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2)); // [ [ 'a', 'b' ], [ 'c', 'd' ] ]

function add(n) {
  let fn = x => add(n + x);
  fn.toString = () => n;
  return fn;
}

// console.log(add(2)(3)(4));

// function sum(arr, n) {
//   if (n <= 0) {
//     return arr[0];
//   } else {
//     return sum(arr, n - 1) + arr[n];
//   }
// }
// console.log(sum([2, 3, 4], 2)); //return 9

function generateHashtag(str) {
  let hashedStr = str
    .split(" ")
    .map(word => word.replace(word.charAt(0), word.charAt(0).toUpperCase()))
    .join("");
  return hashedStr.length > 0 && hashedStr.length < 140 ? `#${hashedStr}` : false;
}

// console.log(generateHashtag("Do We have A Hashtag"));

function score(dice) {
  let score = 0;
  let arr = dice.sort().map(item => (item == 1 ? 10 : item));
  let tri = 0;
  for (let i = 0; i < 5; i++) {
    if (arr[i] == arr[i + 1]) {
      tri += 1;
      if (tri == 2) {
        score += arr[i] * 100;
        arr.splice(i - 1, 3);
        break;
      }
    } else {
      tri = 0;
    }
  }

  return (score +=
    arr
      .filter(item => item == 5 || item == 10)
      .reduce((sum, current) => sum + current, 0) * 10);
}

console.log(score([2, 3, 4, 6, 2]));
