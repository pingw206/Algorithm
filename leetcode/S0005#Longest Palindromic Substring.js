// date: 2021.7.27

var longestPalindrome = function(s) {
  var dpTable = new Array();
  for (var i = 0; i < s.length; i++) {
      dpTable.push(new Array(s.length).fill(0));
  }
  
  var maxLen = 1, start = 0, end = 0;
  for (var step = 0; step < s.length; step++) {
      for (var i = 0; i + step < s.length; i++) {
          if (step == 0) {
              dpTable[i][i] = 1;
          } else if (step == 1) {
              dpTable[i][i+1] = (s[i] == s[i+1]) ? 1 : 0;
          } else {
              dpTable[i][i+step] = (dpTable[i+1][i+step-1] == 1 && s[i] == s[i+step]) ? 1 : 0;
          }
          if (dpTable[i][i+step] == 1 && step+1 > maxLen) {
              maxLen = step+1;
              start = i, end = i+step;
          }
      }
  }
  return s.substring(start, end+1);
};