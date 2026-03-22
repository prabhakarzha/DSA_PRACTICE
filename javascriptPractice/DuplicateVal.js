// // 4. Remove Duplicates from Sorted Array (Easy)
// let arr = [1, 1, 2, 4, 3, 4, 2, 3, 1];

// function removeDuplicates(arr) {
//   let uniqueArr = [];
//   let seen = {}; // Hash map to track seen values

//   for (let i = 0; i < arr.length; i++) {
//     if (!seen[arr[i]]) {
//       // If arr[i] is not seen, add it
//       uniqueArr.push(arr[i]);
//       seen[arr[i]] = true; // Mark as seen
//     }
//   }

//   return uniqueArr;
// }

// console.log(removeDuplicates(arr)); // Output: [1, 2, 4, 3]
let arr = [1, 1, 1, 3, 3, 3, 4, 4, 5, 6];
// let arr = [2, 1, 3, 4, 2, 5, 4, 6, 7, 4];
// arr.sort();

function DuplicateVal(arr) {
  if (arr.length === 0) return [];

  let uniqueArray = [arr[0]];
  let i = 0;

  for (let j = 1; j < arr.length; j++) {
    if (arr[j] !== uniqueArray[i]) {
      uniqueArray.push(arr[j]);
      i++;
    }
  }

  return uniqueArray;
}

console.log(DuplicateVal(arr)); // [1, 3, 4, 5, 6]
