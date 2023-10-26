const recoverTree = (root: TreeNode | null): void => {
    let small: TreeNode;
    let big: TreeNode;
    let prev: TreeNode;

    const dfs = (node: TreeNode | null) => {
        if (!node) return;
        dfs(node.left);

        if (prev && prev.val > node.val) {
            if (!small) small = prev;
            big = node;
        }
        prev = node;

        dfs(node.right);
    };

    dfs(root);

    const temp = big?.val;
    big.val = small?.val;
    small.val = temp;
};
