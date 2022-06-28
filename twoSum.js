//brute force
// var twoSum = function (nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         return [i, j];
//       }
//     }
//   }
// };

// var twoSum = function (nums, target) {
//   const indicies = {};
//   for (let i = 0; i < nums.length; i++) {
//     indicies[nums[i]] = i;
//   }
//   for (let i = 0; i < nums.length; i++) {
//     const complement = target - nums[i];

//     if (indicies[complement] !== undefined && i !== indicies[complement]) {
//       return [i, indicies[complement]];
//     }
//   }
// };

// var twoSum = function (nums, target) {
//   const indicies = {};

//   nums.forEach((item, index) => {
//     indicies[item] = index;
//   });

//   for (let i = 0; i < nums.length; i++) {
//     const complement = target - nums[i];

//     if (indicies[complement] !== undefined && i !== indicies[complement]) {
//       return [i, indicies[complement]];
//     }
//   }
// };

var twoSum = function (nums, target) {
  const indicies = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (indicies.has(complement)) {
      return [indicies.get(complement), i];
    }
    indicies.set(nums[i], i);
  }
};
