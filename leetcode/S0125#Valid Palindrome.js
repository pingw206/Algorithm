// date: 2021.7.27
/* 我本来还想通过charCodeAt()转成数字，来判断是不是字母，然后把是的放到数组里，再判断回文，有点麻烦了
*/
var isPalindrome = function(s) {
  let left = 0, right = s.length - 1;
  while (left < right) {
      while (left < right && !isalnum(s[left])) {
          left++;
      }
      while (left < right && !isalnum(s[right])) {
          right--;
      }
      if (left < right && s[left].toLowerCase() !== s[right].toLowerCase()) {   //别忘了转成小写再判断
          return false;
      }
      left++, right--;
  }
  return true;
};

var isalnum = function(ch) {
  const regexp = /[a-zA-Z0-9]/;  //正则，只能字母和数字（注意数字也符合，虽然没说，要弄清题意）
  return regexp.test(ch);
};