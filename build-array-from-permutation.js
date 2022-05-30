const buildArray = function (nums) {
  let ans = [];
  for (let i = 0; i <= nums.length - 1; i++) {
    ans.push(nums[nums[i]]);
  }
  return ans;
};
