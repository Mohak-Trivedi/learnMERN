// Default export's import in ESM:
// import bs from "./bubbleSort";
// In CommonJS:
const bs = require("./bubbleSort");

// Named export's import in ESM:
// import { linearSearch, binarySearch, ternarySearch } from "./searching";
// In CommonJS:
const { linearSearch, binarySearch, ternarySearch } = require("searching.js");

// for custom naming of named exports in ESM, use "as"
// import { linearSearch as ls, binarySearch, ternarySearch } from "./searching";

console.log(linearSearch, binarySearch, ternarySearch);

const arr = [3, 2, 1];
bs(arr);
console.log(arr);
