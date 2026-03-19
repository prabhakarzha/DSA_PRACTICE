var missingNumber = function (nums) {
  n = nums.length;
  let expectedCount = (n * (n + 1)) / 2;
  let actualSum = 0;

  for (let i = 0; i < nums.length; i++) {
    actualSum = actualSum + nums[i];
  }
  return expectedCount - actualSum;
};
