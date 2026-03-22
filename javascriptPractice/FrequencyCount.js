let nums = [1, 4, 1, 4, 5, 2, 1, 2, 4, 1, 2, 5, 3, 1, 3];

function FrequencyCount(nums) {
  let count = {};

  for (let i = 0; i < nums.length; i++) {
    count[nums[i]] = (count[nums[i]] || 0) + 1;
  }
  return count;
}

console.log(FrequencyCount(nums));

// output - { 1: 5, 2: 3, 3: 2, 4: 3, 5: 2 };
