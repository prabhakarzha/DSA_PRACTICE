// str = "aabcccccaaa";
// function CompressString(str) {
//   let result = "";
//   let count = 1;

//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === str[i + 1]) {
//       count++;
//     } else {
//       result += str[i] + count;
//       count = 1;
//     }
//   }

//   return result;
// }
// console.log(CompressString(str));

chars = ["a", "a", "b", "b", "c", "c", "c"];
function CompressString(chars) {
  let index = 0; // write pointer
  let i = 0; // read pointer

  while (i < chars.length) {
    let char = chars[i];
    let count = 0;

    // count same characters
    while (i < chars.length && chars[i] === char) {
      i++;
      count++;
    }

    // write character
    chars[index++] = char;

    // write count if > 1
    if (count > 1) {
      let str = count.toString();
      for (let ch of str) {
        chars[index++] = ch;
      }
    }
  }

  return index;
}
console.log(CompressString(chars));
