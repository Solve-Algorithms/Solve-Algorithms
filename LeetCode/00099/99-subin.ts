import { TreeNode } from "../common";
/**
 Do not return anything, modify root in-place instead.
 */

 function recoverTree(root: TreeNode | null): void {
    let firstIncorrectNode = null as TreeNode | null;
    let secondIncorrectNode = null as TreeNode | null;
    let prevNode: TreeNode | null = new TreeNode(Number.MIN_SAFE_INTEGER);

    function inOrderTraversal(node: TreeNode | null): void {
        if (!node) return;

        inOrderTraversal(node.left);

        // 중위순회시, 오름차순 정렬이 되는 점을 이용하는 것임
        // 무조건 이전값보다 node.val이 커야한다.
        if (node.val < prevNode!.val) {
            if (firstIncorrectNode === null) {
                firstIncorrectNode = prevNode;
            }
            secondIncorrectNode = node;
        }

        prevNode = node;

        inOrderTraversal(node.right);
    }

    inOrderTraversal(root);

    if (firstIncorrectNode && secondIncorrectNode) {
        const temp = firstIncorrectNode.val;
        firstIncorrectNode.val = secondIncorrectNode.val;
        secondIncorrectNode.val = temp;
    }
};
