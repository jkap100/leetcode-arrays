/**
 //* @param {number[]} nums
 //* @return {boolean}
 */

var containsDuplicate = function (nums) {
  let numbers = new Set();

  for (let i = 0; i < nums.length; i++) {
    if (!numbers.has(nums[i])) {
      numbers.add(nums[i]);
    } else {
      return true;
    }
  }
  return false;
};
