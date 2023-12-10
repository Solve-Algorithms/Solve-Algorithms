function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
    const nodeValue = postorder[postorder.length - 1];
    const inorderIndex = inorder.indexOf(nodeValue);

    const leftInorder = inorder.slice(0, inorderIndex);
    const rightInorder = inorder.slice(inorderIndex + 1);

    const leftPostorder = postorder.slice(0, leftInorder.length);
    const rightPostorder = postorder.slice(leftInorder.length, -1);

    const leftNode =
        leftPostorder.length > 0 ? buildTree(leftInorder, leftPostorder) : null;
    const rightNode =
        rightPostorder.length > 0
            ? buildTree(rightInorder, rightPostorder)
            : null;

    return new TreeNode(nodeValue, leftNode, rightNode);
}
