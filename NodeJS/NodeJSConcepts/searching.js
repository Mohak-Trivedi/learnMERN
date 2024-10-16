function linearSearch(arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === val) return i;
  }
  return -1;
}

function binarySearch(arr, val) {
  let left = 0;
  let right = arr.length - 1;
  let middle = Math.floor((left + right) / 2);

  while (arr[mid] !== val && left <= right) {
    if (val < arr[mid]) {
      right = mid - 1;
    } else if (val > arr[mid]) {
      left = mid + 1;
    }
    mid = Math.floor((left + right) / 2);
  }

  return arr[mid] === val ? mid : -1;
}

// module.exports = linearSearch; // like default export
module.exports = { linearSearch, binarySearch }; // like normal export
