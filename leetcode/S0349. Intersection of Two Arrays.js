// date: 2021.7.13
/* 1. Set 常用操作用法：
set.add(value); 
set.delete(value);
set.has(value)  返回布尔值
2. 迭代set：(以下都可以，是同样的）
for (let item of mySet){}; 
for (let item of mySet.keys());
for (let item of mySet.values())
mySet.forEach(function(value) {
  console.log(value);
});
mySet.forEach((value) => {
  console.log(value);
});
3. 用Set构造器将Array转换为Set
let myArray = ["value1", "value2", "value3"];
let mySet = new Set(myArray);
或者传统方法
var set1 = new Set();
nums1.forEach((num) => {
    set1.add(num);
 });
*/

// solution1: one hash set
var intersection = function(nums1, nums2) {
  var set1 = new Set(nums1);    
  var result = [];
  nums2.forEach((num) => {
      if (set1.has(num)) {
          result.push(num);
          set1.delete(num);
      }
  });
  return result;
};

// solution2: two hash set
var intersection = function(nums1, nums2) {
  var set1 = new Set(nums1);
  var set2 = new Set(nums2);  
  var result = [];
  set2.forEach(function(value){
      if (set1.has(value)) {
          result.push(value);    
      }
  });
  return result;
};
/* 或者这样遍历
for(let item of set2){
   if (set1.has(item)) {
        result.push(item);    
   }
};
*/

// solution3: sort & two pointers
var intersection3 = function(nums1, nums2) {
  nums1.sort((a, b) => {         //一般说了不要重复的，就需要先排序
      return a - b;
  });
  nums2.sort((a, b) => {
      return a - b;
  });

  var p1 = 0, p2 = 0;
  var result = [];
  while (p1 < nums1.length && p2 < nums2.length) {
      if (nums1[p1] == nums2[p2]) {
          var curNum = nums1[p1]
          result.push(curNum);
          while (p1 < nums1.length && nums1[p1] == curNum) {
              p1++;
          }
          while (p2 < nums2.length && nums2[p2] == curNum) {
              p2++;
          }
      } else if (nums1[p1] < nums2[p2]) {
          p1++;
      } else {
          p2++;
      }
  }
  return result;
};