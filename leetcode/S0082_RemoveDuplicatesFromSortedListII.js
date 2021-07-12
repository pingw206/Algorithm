//2020.05.24 |12-17|2021-1-10 |5-27|7-12
/* 跟#203题的异同点： 
 异 --- 不留下重复节点，需要一直往后面找pointer.next.next节点，然后越过去， 比较好的办法是设计一个指针节点，一个开始一个终止节点来确定重复的节点
 同 --- 判断好后重复节点/不重复节点，然后挪节点，同#203题的处理方法一致
*/
var deleteDuplicates = function(head) {
    var dummyNode = new ListNode(0,head);
    var pointer = dummyNode;

    while (pointer.next != null) {
        var start = pointer.next;  // 1. 重复的第一个节点
        var end = start;
        while (end.next != null && end.next.val == start.val) {  //找到重复的最后一个节点
            end = end.next;
        }
         // 2. 处理跳跃节点
        if (start == end) {    //2.1无重复节点，也就是起始节点是同一个节点，注意这里是节点相同，不仅仅是val相同
            pointer = pointer.next;
        } else {               // 2.2 有重复节点时
            pointer.next = end.next;  // //注意不是cursorNode = endNode.next ，其实这里思想和#203题还是一样的
        }
    }
    return dummyNode.next;
};