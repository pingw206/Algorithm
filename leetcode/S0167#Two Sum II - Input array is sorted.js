// date: 2021.7.27
/* 要想到肯定是有解的 */

var twoSum = function(numbers, target) {
  var left = 0, right = numbers.length-1;
  while (left < right) {
      var sum = numbers[left]+numbers[right];
      if (sum > target) {
          right--;
      } else if (sum < target) {
          left++;
      } else {
          return [left+1, right+1];
      }
  }
  return [];
};