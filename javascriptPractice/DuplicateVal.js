//Remove  duplicate from sorted array leetcode sol

//using Two Pointer
var removeDuplicates = function (nums) {
  let k = 1; //unique element

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[k] = nums[i];
      k++;
    }
  }
  return k;
};

// Time Complexity - 0(n)
// space complexity - o(1)

// 4. Remove Duplicates from unSorted Array (Easy) using HashMap
let arr = [1, 1, 2, 4, 3, 4, 2, 3, 1];

function removeDuplicates(arr) {
  let uniqueArr = [];
  let seen = {}; // Hash map to track seen values

  for (let i = 0; i < arr.length; i++) {
    if (!seen[arr[i]]) {
      // If arr[i] is not seen, add it
      uniqueArr.push(arr[i]);
      seen[arr[i]] = true; // Mark as seen
    }
  }

  return uniqueArr;
}

console.log(removeDuplicates(arr)); // Output: [1, 2, 4, 3]

// time complexity - 0(n)
// space complexity -0(n)  extra space use ho raha hai . this i sbest approach for unsorted array
