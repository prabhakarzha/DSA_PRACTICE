function firstNonRepeatingCharacter(str) {
  // Create an object to store character counts
  const count = {};

  // First pass: count each character's occurrences
  for (const char of str) {
    count[char] = (count[char] || 0) + 1;
  }

  // Second pass: find the first character with count 1
  for (let i = 0; i < str.length; i++) {
    if (count[str[i]] === 1) {
      return i;
    }
  }

  // If no non-repeating character found, return null or a message
  return null;
}

const inputString = "leetcode";
const result = firstNonRepeatingCharacter(inputString);
console.log(result);
