let str = "Prabhakar";
let arr = str.split(""); // Convert string to array (strings are immutable in JS)

function reverseString(arr, left, right) {
  if (left >= right) return;

  // swap
  [arr[left], arr[right]] = [arr[right], arr[left]];

  reverseString(arr, left + 1, right - 1);
}

reverseString(arr, 0, arr.length - 1);

// Convert back to string
let reversed = arr.join("");
console.log(reversed); // rakahbarP
