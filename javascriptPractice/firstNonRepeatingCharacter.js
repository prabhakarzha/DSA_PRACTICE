function firstNonRepeatingCharacter(str) {
  // Create an object to store character counts
  const count = {};

  // First pass: count each character's occurrences
  for (const char of str) {
    if (count[char]) {
      count[char] = count[char] + 1;
    } else {
      count[char] = 1;
    }
  }

  // Second pass: find the first character with count 1
  for (let i = 0; i < str.length; i++) {
    if (count[str[i]] === 1) {
      return i;
    }
  }

  return null;
}

const inputString = "leetcode";
const result = firstNonRepeatingCharacter(inputString);
console.log(result);
