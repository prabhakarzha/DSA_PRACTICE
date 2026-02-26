let arr = [8, 8, 7, 6, 5];

function secondLargest(arr) {
  if (arr.length < 2) return null;

  let largest = -Infinity;
  let secondLarge = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLarge = largest;
      largest = arr[i];
    } else if (arr[i] > secondLarge && arr[i] < largest) {
      secondLarge = arr[i];
    }
  }

  return secondLarge === -Infinity ? null : secondLarge;
}

console.log(secondLargest(arr)); // 7
