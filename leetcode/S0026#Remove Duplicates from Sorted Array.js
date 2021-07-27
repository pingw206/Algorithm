// date: 2021.7.27
/*虽然只需要输出index，题目要求还是要原地更改一下nums的前几个数字的*/

var removeDuplicates = function(nums) {
  let index = 0, start = 0;
  while (start < nums.length) {
      let curNum = nums[start];
      nums[index++] = nums[start++];
      while (start < nums.length && curNum == nums[start]) {
          start++;
      }
  }
  return index;
};