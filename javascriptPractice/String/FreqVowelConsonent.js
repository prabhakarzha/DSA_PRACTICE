let str = "successes";
function FreqVowelConsonent(str) {
  let map = {};
  function isVowel(ch) {
    return ch === "a" || ch === "e" || ch === "i" || ch === "o" || ch === "u";
  }
  // Step 1: count frequency
  for (let char of str) {
    map[char] = (map[char] || 0) + 1;
  }
  let vowel = 0;
  let cons = 0;
  // Step 2: find max vowel & consonant
  for (let ch in map) {
    if (isVowel(ch)) {
      vowel = Math.max(vowel, map[ch]);
    } else {
      cons = Math.max(cons, map[ch]);
    }
  }
  // Step 3: return sum
  return vowel + cons;
}
console.log(FreqVowelConsonent(str)); // Output: 6
