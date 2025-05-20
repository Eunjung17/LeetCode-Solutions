/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
< First >

[variable]
- node: node = root

[logic]
- while node is not ull
    - if node < p and node < q:
        - node = node.right
    - else if node > p and node > q:
        - node = node.left;
    - else return node

Time Complexity: O(H)
Space Complexity: O(1)

First Fail Reason:
- overlooked the fact that p and q are also instances of the TreeNode structure.
*/ 

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
// var lowestCommonAncestor = function(root, p, q) {
//     let node = root;
//     while(root != null){
//         if(node.val < p.val && node.val < q.val) node = node.right;
//         else if(node.val > p.val && node.val > q.val) node = node.left;
//         else return node;
//     }
// };

/**
< second > - using recursive function

[logic]

- if node < p and node < q:
    - return lowestCommonAncestor(root, p, q)
- else if node > p and node > q:
    - node = node.left;
- else return node

Time Complexity: O(H)
Space Complexity: O(1)

*/ 

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
function lowestCommonAncestor(root, p, q) {
    if (p.val > root.val && q.val > root.val) {
        return lowestCommonAncestor(root.right, p, q);
    } else if (p.val < root.val && q.val < root.val) {
        return lowestCommonAncestor(root.left, p, q);
    } else {
        return root;
    }
}