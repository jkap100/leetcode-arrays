var runningSum = function (nums) {
  let runningSum = new Array(nums.length);

  runningSum[0] = nums[0];

  for (let i = 1; i < nums.length; i++) {
    runningSum[i] = nums[i] + runningSum[i - 1];
  }
  return runningSum;
};

// input = [1, 2, 3, 4];
// input = [1, 1, 1, 1, 1];
input = [
  -30, -92, -67, 67, 23, 94, -27, 33, -97, -85, 51, 4, 60, -43, 50, 35, -42, 85,
  -12, -21, -35, -44, 32, -62, 18, -69, -60, 23, 34, 9, 83, 11, 20, -16, -87,
  49, 77, 59, -51, 35, 46, -79, -37, -79, 66, -57, -54, -52, 5, -60,
];

console.log(runningSum(input));
