var AllMissingNumber = function (nums) {
  const n = nums.length;
  const count = {};
  const missing = [];

  // 1. Count frequency of each number
  for (let i = 0; i < n; i++) {
    const num = nums[i];
    count[num] = (count[num] || 0) + 1;
  }

  // 2. Check 1 to n - jiska count 0 hai, wo missing
  for (let i = 1; i <= n; i++) {
    if (!count[i]) {
      // count[i] undefined ya 0 hoga
      missing.push(i);
    }
  }

  return missing;
};
