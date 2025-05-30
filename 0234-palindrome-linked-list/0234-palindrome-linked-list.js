/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/** 
1. Traverse the poiners from the beginning to the end using while:
    - Store the values in an empty array
2. Find the middle of the array.
3. Traverse from the beginning up to the middle:
    - Compare each value with the corresponding value from  the end of the array, moving backword:
        - if the values are different, return false
4. return true
*/
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let valArray = [];
    let middle = 0;
    let curCompareIndex = 0;

    while(head){ // store all values in array from linked list
        valArray.push(head.val);
        head = head.next;
    }
    
    curCompareIndex = valArray.length - 1; // find an end of index
    middle = Math.floor(valArray.length / 2); // find a middle of index
    
    for(let i = 0 ; i < middle ; i++){ // Until a middle of index, compare each of indice with last of index, moving backword
        if(valArray[i] !== valArray[curCompareIndex]) return false;

        curCompareIndex--;
    }
    return true;
};