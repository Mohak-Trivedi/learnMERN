function bubbleSort(arr) {
  let n = arr.length;
  let swapped;

  // Outer loop for each pass through the array
  for (let i = 0; i < n - 1; i++) {
    swapped = false;

    // Inner loop to compare adjacent elements
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap the elements if they're in the wrong order
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swapped = true;
      }
    }

    // If no elements were swapped, the array is already sorted
    if (!swapped) break;
  }

  return arr;
}

// In ESM, default export:
// export default bubbleSort;

// In CommonJS, default export:
module.exports = bubbleSort;
