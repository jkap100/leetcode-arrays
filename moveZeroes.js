var moveZeroes = function (nums) {
  let lastNonZeroIndx = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[lastNonZeroIndx] = nums[i];
      lastNonZeroIndx++;
    }
  }
  for (let i = lastNonZeroIndx; i < nums.length; i++) {
    nums[i] = 0;
  }
};
