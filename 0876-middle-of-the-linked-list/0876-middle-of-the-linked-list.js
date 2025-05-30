/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

 /** 
    1. while ListNode.next = null:
        - count how many nodes exist
    
    2. After checking the middle
    3. Find the location of middle and Return

    Time Complexity: O(n)
    Space Complexity: O(1)
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {

    if(!head) return null;
    
    let countNode = -1;
    let current = head;
    let midNode = 0;

    while(current){
        countNode++;
        current = current.next;
    }

    if(countNode % 2 === 0){ // if there is one middle node
        midNode = countNode / 2;
    }else{ //if there are two middle nodes
        midNode = Math.floor( countNode / 2 ) + 1;
    }

    current = head;

    while(midNode > 0){ // move node pointer to the middle node
        midNode--;
        current = current.next;
    }

    return current;
};