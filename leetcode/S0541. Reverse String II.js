// date: 2021.7.18
// 注意end的位置，index的位置
var reverseStr = function(s, k) {
  var array = s.split('');
  var start = 0;
  while (start < array.length) {
      var end = Math.min(start+k, array.length);
      // end： index从0开始，第K个数在k-1的index处， [start，end）
      reverse(array, start, end-1);
      start += 2*k;
  }
  return array.join('');
};

var reverse = function(array, start, end) {
  while (start < end) {
      var temp = array[start];
      array[start] = array[end];
      array[end] = temp;
      start++, end--;
  }
}