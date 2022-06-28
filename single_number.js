/**
// * @param {number[]} nums
 //* @return {number}
 */
var singleNumber = function (nums) {
  const ht = {}; //using a hash table to count the number of time a number appears

  for (const num of nums) {
    //ht[num] is falsey then evaluate to 1
    ht[num] = ht[num] + 1 || 1;
  }
  for (const key in ht) {
    if (ht[key] === 1) {
      return key;
    }
  }
};
