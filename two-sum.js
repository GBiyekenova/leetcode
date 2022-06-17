const twoSum = function (nums, target) {
  if (nums.length === 2) return [0, 1];

  // Brute force approach: nested loops
  // Time complexity: O(n^2)
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i === j) continue;
      if (nums[i] + nums[j] === target) return [i, j];
    }
  }
};
