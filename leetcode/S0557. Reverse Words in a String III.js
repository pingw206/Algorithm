// date: 2021.7.18

// solution1: can handle with cases with leading or trailing whitespaces,
//            and cases in wthich words are separated by multi whitespaces.
var reverseWords = function(s) {
  var arr = s.split('');
  var start = 0;
  while (start < arr.length) {
      while (start < arr.length && arr[start] == ' ') {
          start++;
      }
      var end = start;
      while (end < arr.length && arr[end] != ' ') {
          end++;
      }
      // reverse range: [start, end)
      reverse(arr, start, end-1);
      start = end+1;
  }
  return arr.join('');
};
var reverse = function(arr,start,end) {
  while (start < end) {
      var temp = arr[start];
      arr[start] = arr[end];
      arr[end] = temp;
      start++;end--;
  }
}
//方法二
var reverseWords = function(s) {
  var array = s.split('');
  var start = 0;
  while (start < array.length) {
      var end = start;
      while (end < array.length && array[end] != ' ') {
          end++;
      }
      // reverse range: [start, end)
      var l = start, r = end-1;
      while (l < r) {
          var temp = array[l];
          array[l] = array[r];
          array[r] = temp;
          l++;
          r--;
      }
      start = end+1;
  }
  return array.join('');
};