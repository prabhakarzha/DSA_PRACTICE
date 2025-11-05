const arr = [1, 5, 2, 3, 6, 7, 2, 3];
function LargestNumber(arr) {
  let result = arr[0];
  for (let i = 1; i <= arr.length; i++) {
    if (arr[i] > result) {
      result = arr[i];
    }
  }
  return result;
}
console.log(LargestNumber(arr));
