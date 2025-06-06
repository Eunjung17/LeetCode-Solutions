/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/** 
1. Convert Linked-list into Array-list using While-loop
2. Find the middle index
3. Using For-loop:
    - Compare each value with the corresponding value from  the end of the array, moving backword:
        - if the values are different, return false
4. return true

Time Complexity: O(N)
Space Complexity: O(N)

Fail: Space Complexity: O(N) should be O(1)

*/
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let valArray = [];
    let middle = 0;
    let curCompareIndex = 0;

    // Convert Linked-list into Array-list
    while(head){
        valArray.push(head.val);
        head = head.next;
    }
    
    // end-index
    curCompareIndex = valArray.length - 1;

    // middle-index
    middle = Math.floor(valArray.length / 2);
    
    // Compare each of indice with last of index, moving backword
    for(let i = 0 ; i < middle ; i++){ 
        if(valArray[i] !== valArray[curCompareIndex]) return false;

        curCompareIndex--;
    }
    return true;
};

/** 
1. Convert Linked-list into Array using While-loop
2. Reverse vals of ArrayList
3. Check if the two Array are eqal to each other

Time Complexity: O(N)
Space Complexity: O(N)

Fail: Space Complexity: O(N) should be O(1)

*/