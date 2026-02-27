let str = "Prabhakar";
let arr = str.split(""); // Convert string to array (strings are immutable in JS)

function reverseString(str) {
  let arr = str.split(""); // Convert string to array (strings are immutable in JS)
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
  return arr.join("");
}

console.log(reverseString(str));
