//2020-12-17 | 2021-5-27 | 7-12
//张磊解法
var deleteDuplicates = function(head) {
    var cursorNode = head;
    while (cursorNode != null) {
        var endNode = cursorNode.next;
        while (endNode != null && endNode.val == cursorNode.val) {
            endNode = endNode.next;
        }
        cursorNode.next = endNode;
        cursorNode = endNode;  //或者是cursorNode = cursorNode.next 
    }
    return head;
};
//方法二，同#203题解法，注意while循环里面依然是if else的关系，不是都会进行的
var deleteDuplicates = function(head) {
    var pointer = head;
    while (pointer != null && pointer.next != null) {
        if (pointer.val == pointer.next.val) {
            pointer.next = pointer.next.next;
        } else {
            pointer = pointer.next;
        }
    }
    if (pointer != null) {
        pointer = pointer.next;  //最后指向null,这步容易忽略，举例不到（好像也不用这步，也能提交对）
    }
    return head;
};