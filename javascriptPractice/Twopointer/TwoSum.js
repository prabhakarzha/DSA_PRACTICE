// if array is sorted then use two pointer
// arr = [1, 2, 3, 4, 6, 8];
// target = 10;

// function TwoSum(arr, target) {
//   let first = 0;
//   let last = arr.length - 1;

//   while (first < last) {
//     let sum = arr[first] + arr[last];

//     if (sum === target) {
//       return [arr[first], arr[last]];
//     } else if (sum < target) {
//       first++;
//     } else {
//       last--;
//     }
//   }
//   return;
// }

// console.log(TwoSum(arr, target));

// if array is not sorted use hashMap.
nums = [3, 2, 4];
target = 6;
// output = [1,2]

function TwoSum(nums, target) {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];

    if (map.has(diff)) {
      return [map.get(diff), i];
    }
    map.set(nums[i], i);
  }
  return;
}
console.log(TwoSum(nums, target));
