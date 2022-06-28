var pivotIndex = function (nums) {
  // first set get a total sum.

  totalSum = 0;
  leftSum = 0;

  for (let i = 0; i < nums.length; i++) {
    totalSum += nums[i];
  }
  //then keep a left sum and then check if total sum -left sum - current element = to left sum
  for (let i = 0; i < nums.length; i++) {
    if (i != 0) leftSum += nums[i - 1];
    if (totalSum - leftSum - nums[i] == leftSum) {
      return i;
    }
  }
  return -1;
};
const input = [1, 7, 3, 6, 5, 6];
console.log(pivotIndex(input));
