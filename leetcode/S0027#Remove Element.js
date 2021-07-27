// date: 2021.7.27

var removeElement = function(nums, val) {
  let index = 0, start = 0;
  while (start < nums.length) {
      while (start < nums.length && nums[start] == val) {
          start++;
      }
      if (start < nums.length) {    //还是随时需要做判断的，不然最后一个数就错了
          nums[index++] = nums[start++];
      }
  }
  return index;  //最后index已经加过1了，不必再加1返回
};