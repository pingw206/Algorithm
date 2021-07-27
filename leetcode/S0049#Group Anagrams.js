// date: 2021.7.27
/* 虽说是hash题，但是也不必非用set,map做，用object的key，value 也是hash.
关键就是如何判断 “eatt”， “atte”是同一类， 可以用字符串编码来比较，单纯看和还不行，有重复的也要考虑
'a'.charCodeAt() => 97
Object.values() 会输出一个数组
注意用数组用 for..of.. 不要用 for .. in .. 
for ... in是为遍历对象属性而构建的，

*/
// solution: count the characters
var groupAnagrams = function(strs) {
  let res = {};
  for (let str of strs) {
      let count = new Array(26).fill(0); // index 0~25 代表 a ~ z, 每个数出现了0次
      for (let char of str) {
          count[char.charCodeAt()-97]++;
      }
      let key = count.toString();  // 注意这里不要用join(""), 因为 [0,11,1]和[0,1,11]一样
      res[key] ? res[key].push(str) : res[key] = [str];
  }
  return Object.values(res);
};

// solution: sort the strings， 把 “eat" "ate"排序后就一样了
var groupAnagrams2 = function(strs) {
  let obj = {};
  for (let str of strs) {
      let letters = str.split("").sort().join("");  //排序后倒是可以用join
      obj[letters] ? obj[letters].push(str) : obj[letters] = [str];
  }
  return Object.values(obj);
};