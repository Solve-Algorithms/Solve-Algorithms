function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
    const nodeValue = preorder[0];
    const inorderIndex = inorder.indexOf(nodeValue);

    const leftInorder = inorder.slice(0, inorderIndex);
    const rightInorder = inorder.slice(inorderIndex + 1);

    const leftPreorder = preorder.slice(1, leftInorder.length + 1);
    const rightPreorder = preorder.slice(leftInorder.length + 1);

    const leftNode =
        leftPreorder.length > 0 ? buildTree(leftPreorder, leftInorder) : null;
    const rightNode =
        rightPreorder.length > 0
            ? buildTree(rightPreorder, rightInorder)
            : null;

    return new TreeNode(nodeValue, leftNode, rightNode);
}
