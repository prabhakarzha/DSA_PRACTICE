// let arr = [3, 4, -7, 1, 3, 3, 1, -4];
let arr = [1, 2, 3];
k = 3;

// using PrefixSUm+hashmap approach

function SubArraySum(arr, k) {
  let map = { 0: 1 };
  let sum = 0;
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];

    if (map[sum - k]) {
      count = count + map[sum - k];
    }
    map[sum] = (map[sum] || 0) + 1;
  }
  return count;
}
console.log(SubArraySum(arr, k));

// // bruteforce Approach
// function SubArraySum(arr, k) {
//   let count = 0;

//   for (let i = 0; i < arr.length; i++) {
//     let sum = 0;
//     for (let j = i; j < arr.length; j++) {
//       sum += arr[j];

//       if (sum === k) {
//         count++;
//       }
//     }
//   }
//   return count;
// }

// console.log(SubArraySum(arr, k));
