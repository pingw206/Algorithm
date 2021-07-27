// date: 2021.7.27
/* anagram: 颠倒字母顺序构成的词， 就是说t和s 只是字母顺序不同, 长度什么都是相同的
直观思路： 统计两个字符串中不同字符出现的次数，只有当两者出现的字符相同且出现的次数相同，那么它们是“anagram”。
*/

// solution: count characters
var isAnagram = function(s, t) {
  if (s.length !== t.length) {
      return false;
  }
  var map = new Map();
  for(var i=0; i<s.length;i++) {
      if (map.has(s[i])) {
          map.set(s[i],map.get(s[i])+1);
      } else {
          map.set(s[i],1);
      }
  }
  for (var j=0; j<t.length;j++) {
      if (map.has(t[j])) {
          map.set(t[j],map.get(t[j])-1);
          if (map.get(t[j]) < 0) {
              return false;
          }
      } else {
          return false;
      }
  }
  return true;
};
// solution: sort
var isAnagram2 = function(s, t) {
  return s.split('').sort().join('') == t.split('').sort().join('');
};