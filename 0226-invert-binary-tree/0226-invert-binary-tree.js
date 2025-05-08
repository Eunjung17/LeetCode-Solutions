/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
//  function TreeNode(val, left, right) {
//      this.val = (val===undefined ? 0 : val)
//      this.left = (left===undefined ? null : left)
//      this.right = (right===undefined ? null : right)
// }

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {

    if(!root) return null;
    

    let temp = root.right;
    root.right = root.left;
    root.left = temp;

    invertTree(root.left);
    invertTree(root.right);
    console.log("root:",  root);
    return root;
};

// let root = new TreeNode(2, new TreeNode(1), new TreeNode(3));

// let result = new invertTree(root);
// console.log(JSON.stringify(result,null,2));