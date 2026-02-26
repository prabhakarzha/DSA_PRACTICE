arr = [2, 1, 4, 3, 5, 9, 8, 7, 6];

const CheckArraySorted = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
};
console.log(CheckArraySorted(arr));
