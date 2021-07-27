// date: 2021.7.27
/*不用非要把end = start， push的时候end-1即可
push的时候就能组装"->" ，因为是字符串，好弄
*/
var summaryRanges = function(nums) {
  let list = [];
  let start = 0;
  while (start < nums.length) {
      let end = start+1;
      while (end < nums.length && nums[end]-nums[start] == end-start) {  //这点很妙
          end++;
      }
      // [start, end)
      if (start + 1 == end) {
          list.push(nums[start].toString());
      } else {
          list.push(nums[start].toString() + "->" + nums[end-1].toString());
      }
      start = end;
  }
  return list;
};