let str = "loveleetcode";

function FirstUniqueChar(str) {
  let count = {};

  // Step 1: count frequency
  for (let char of str) {
    count[char] = (count[char] || 0) + 1;
  }

  // Step 2: check in original order
  for (let char of str) {
    if (count[char] === 1) {
      return char;
    }
  }

  return -1;
}

console.log(FirstUniqueChar(str)); // v
