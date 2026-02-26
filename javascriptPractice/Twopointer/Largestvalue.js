function LargestValue(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

arr = [2, 4, 15, 7, 8, 10];

console.log(LargestValue(arr));
