import bs from "./bubbleSort";

import { linearSearch, binarySearch, ternarySearch } from "./searching";

// for custom naming of named exports, use "as"
// import { linearSearch as ls, binarySearch, ternarySearch } from "./searching";

console.log(linearSearch, binarySearch, ternarySearch);

const arr = [3, 2, 1];
bs(arr);
console.log(arr);
