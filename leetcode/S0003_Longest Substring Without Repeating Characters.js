// date: 2021.7.19

// Solution1: Time and Space Complexity: O(n)
var lengthOfLongestSubstring = function(s) {
  if (s.length == 0) {
      return 0;
  }
  
  var hash = new Map();
  var len = 1;
  var start = 0;
  for (var index = 0; index < s.length; index++) {
      if (hash.has(s[index]) && hash.get(s[index]) >= start) {
          start = hash.get(s[index]) + 1;
      }
      hash.set(s[index], index);
      len = Math.max(len, index-start+1);
  }
  return len;
};

// Solution2: Time Complexity: O(n*n)
var lengthOfLongestSubstring = function(s) {
  if (s.length == 0) {
     return 0;
  }
  var len = 0;
  for (var i = 0; i < s.length; i++) {
      var hash = new Set();
      for (var j = i; j < s.length; j++) {
          if (!hash.has(s[j])) {
              hash.add(s[j]);
              len = Math.max(len, j-i+1);
          } else {
              break;
          }
      }
  }
  return len;
};