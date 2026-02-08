// arr=[2,5,3,7,5,7,2]
// output = [2,7,5,7,3,5,2]

function ArrayReverse(arr) {
  let first = 0;
  let last = arr.length - 1;

  while (first < last) {
    [arr[first], arr[last]] = [arr[last], arr[first]];
    first++;
    last--;
  }
  return arr;
}

let arr = [2, 5, 3, 7, 5, 7, 2];
console.log(ArrayReverse(arr));
