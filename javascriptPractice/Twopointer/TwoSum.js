let arr = [3, 5, 6, 8, 9];
target = 13;

function TwoSum(arr, target) {
  let first = 0;
  let last = arr.length - 1;

  while (first < last) {
    if (arr[first] + arr[last] == target) {
      return [arr[first], arr[last]];
    }
    first++;
    last--;
  }
  return;
}

console.log(TwoSum(arr, target));
