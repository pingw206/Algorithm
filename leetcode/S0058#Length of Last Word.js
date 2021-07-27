// date: 2021.7.27
/* 我的超简单办法s.split(" ")[s1.length-1].length; 失败在了 "a "
*/

var lengthOfLastWord = function(s) {
  let end = s.length-1;
  while (end >= 0 && s[end] == ' ') {
      end--;
  }
  if (end == -1) {
      return 0;
  }
  let start = end;
  while (start >= 0 && s[start] != ' ') {
      start--;
  }
  // (start, end]
  return end-start;
};