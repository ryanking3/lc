/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function isSymmetric(root: TreeNode | null): boolean {
    if (!root) return true; // An empty tree is symmetric
    
    const isMirror = (t1: TreeNode | null, t2: TreeNode | null): boolean => {
        if (!t1 && !t2) return true; // Both nodes are null
        if (!t1 || !t2) return false; // One node is null, the other is not
        return (t1.val === t2.val) && 
               isMirror(t1.left, t2.right) && 
               isMirror(t1.right, t2.left);
    };

    return isMirror(root.left, root.right);
};
