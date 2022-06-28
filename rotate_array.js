// var rotate = function (nums, k) {
//   //get remainder of k when divided by length of the array
//   k = k % nums.length;

//   reverse(nums, 0, nums.length - 1);
//   //reverse the entire array
//   //[5,4,3,2,1]

//   reverse(nums, 0, k - 1);
//   //[4,5]

//   reverse(nums, k, nums.length - 1);
//   //[1,2,3]
// };

// var reverse = function (nums, start, end) {
//   while (start < end) {
//     let temp = nums[start];
//     nums[start] = nums[end];
//     nums[end] = temp;
//     start++;
//     end--;
//   }
// };

//pop unshift version

var rotate = function (nums, k) {
  k = k % nums.length;

  while (k > 0) {
    //unshift adds the element to the beggining of the array
    //pop returns the last element of the arrray
    nums.unshift(nums.pop());
    k--;
  }
};
