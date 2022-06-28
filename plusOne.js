/**
 //* @param {number[]} digits
 //* @return {number[]}
 */

var plusOne = function (digits) {
  //work through the digits array backwards (right to left) incase a carryover operation is required
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      //checking to see if carryover is required
      digits[i] = digits[i] + 1;

      return digits;
    } else {
      digits[i] = 0;
    }
  }
  //incase the for loop continues running and all zeros are returned
  // 99 => 00
  digits.unshift(1);
  return digits;
};
