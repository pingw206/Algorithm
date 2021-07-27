// date: 2021.7.27
/*题目大意：

判断ransomNote是否为magazine的组成部分。

ransomNote某一字符的个数必须小于magazine。ransomNote中出现的字符magazine中必须都有。
*/

var canConstruct = function(ransomNote, magazine) {
  const map = {};
  for(let letter of magazine) {
      map[letter] ? map[letter]++ : map[letter]=1;
  }

  for(let letter of ransomNote) {
      if(!map[letter]) {
          return false;
      } 
      map[letter]--;
      /*为什么不需要下面这段话，因为map[letter]==0时是false，先从正数变到0
      if (map[letter] < 0) {
          return false;
      }*/
  }
  return true;
};