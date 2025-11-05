const str = "Sonu";

function isPalindrome(str) {
  const cleanStr = str.toLowerCase(); // case-insensitive
  let left = 0; // start se index
  let right = cleanStr.length - 1; // end se index

  while (left < right) {
    if (cleanStr[left] !== cleanStr[right]) {
      return false; // jaise hi mismatch mila -> palindrome nahi
    }
    left++;
    right--;
  }
  return true; // agar loop complete ho gaya -> palindrome
}

console.log(isPalindrome(str)); // true
