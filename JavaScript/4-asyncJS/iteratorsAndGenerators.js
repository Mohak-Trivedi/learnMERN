// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_generators

// Creation
// function makeRangeIterator(start = 0, end = Infinity, step = 1) {
//   let seqSize = 0; // sequence size
//   let nextVal = start; // to refer to in result

//   // Iterator object
//   const makeIterator = {
//     next() {
//       if (nextVal < end) {
//         // store value to be returned as we will update it to next value before
//         // we return current
//         let result = { value: nextVal, done: false };

//         // update for next value
//         nextVal += step;
//         // update sequence size
//         seqSize++;

//         return result;
//       }

//       // reached the end of sequence
//       return { value: seqSize, done: true };
//     },
//   };

//   return makeIterator;
// }

// Consumption:
// Get the iterator object
// Make first call to next() to get the first value&done object
// If the 'done' value is false:
// - log the 'value' value
// - get the next value&done object
// Repeat the above 3 lines' steps as long as that condition of 'done' value false
// satisfies.
// When 'done' becomes true, return the final returned value i.e. sequence size.
// const iterObj = makeRangeIterator(1, 10, 2);
// let result = iterObj.next();
// while (!result.done) {
//   console.log(result.value);
//   result = iterObj.next();
// }
// console.log("Iterated over sequence of size: ", result.value);

///////////////////////////////////////////////////////////////////////////

// Generators:
// No need to create iterator object on our own.
// No need to mention nextVal
function* makeRangeIterator(start = 0, end = Infinity, step = 1) {
  let seqSize = 0; // sequence size

  for (let nextVal = start; nextVal < end; nextVal += step) {
    seqSize++; // update the sequence size

    yield nextVal; // yield (not return) the next value
  }

  // range is over, so return sequence size
  return seqSize;
}

const iterObj = makeRangeIterator(1, 10, 2);
let result = iterObj.next();
while (!result.done) {
  console.log(result.value);
  result = iterObj.next();
}
console.log("Iterated over sequence of size: ", result.value);
