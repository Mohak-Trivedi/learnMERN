function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i; // Return index if found
    }
  }
  return -1; // Return -1 if not found
}

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid; // Return index if found
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1; // Return -1 if not found
}

function ternarySearch(arr, left, right, target) {
  if (right >= left) {
    let mid1 = left + Math.floor((right - left) / 3);
    let mid2 = right - Math.floor((right - left) / 3);

    if (arr[mid1] === target) {
      return mid1;
    }
    if (arr[mid2] === target) {
      return mid2;
    }

    if (target < arr[mid1]) {
      return ternarySearch(arr, left, mid1 - 1, target);
    } else if (target > arr[mid2]) {
      return ternarySearch(arr, mid2 + 1, right, target);
    } else {
      return ternarySearch(arr, mid1 + 1, mid2 - 1, target);
    }
  }
  return -1; // Return -1 if not found
}

// In ESM, for named export we use export before the function definition
// OR
// export { linearSearch, binarySearch, ternarySearch };

// In CommonJS, for named export:
module.exports = { linearSearch, binarySearch, ternarySearch };
