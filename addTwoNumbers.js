/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let l3 = new ListNode(0);
    let offset = 0;
    let preNode = l3;
    while(l1 != null || l2 != null || offset == 1) {
        let l1val = (l1 === null) ? 0 : l1.val;
        let l2val = 0;
        if(l2 != null) {
            l2val = l2.val;
        }
        let temp = l1val + l2val + offset;
        
        curNode = new ListNode(temp % 10);
        
        if (temp > 9) {
            offset = 1;
        }else {
            offset = 0;
        }
        preNode.next = curNode;
        preNode = curNode;
        if (l1 != null) {l1 = l1.next;}
        if (l2 != null) {l2 = l2.next;}
    }
    
    return l3.next;
};
