
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
    
    let newHead = new ListNode(0); //new LinkedList for sum of adding two numbers
    let current = newHead;
    let carry = 0;

    while(l1 !== null || l2 !== null){

        let num1 = (l1!== null) ? l1.val : 0;
        let num2 = (l2!== null) ? l2.val : 0;

        let sum = num1 + num2 + carry;

        carry = Math.floor(sum / 10);   
        current.next = new ListNode(sum % 10);
        current = current.next;

        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null;

    }

    if(carry !== 0){ // In case of carry is remained
        current.next = new ListNode(carry);
        current = current.next;
    }

    return newHead.next;
};