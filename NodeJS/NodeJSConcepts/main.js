// const linearSearch = require("./searching.js"); // like default import
const Searching = require("./searching.js"); // like normal named import

// console.log(linearSearch([10, 20, 15, 20], 15)); // with default import
console.log(Searching.linearSearch([10, 20, 15, 20], 15)); // with named export
