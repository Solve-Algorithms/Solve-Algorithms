function levelOrderBottom(root: TreeNode | null): number[][] {
    let arr: number[][] = [];

    const bfs = (node: TreeNode | null, level: number) => {
        if (!node) return;
        if (arr.length === level) {
            arr.push([]);
        }

        arr[level].push(node.val);
        bfs(node.left, level + 1);
        bfs(node.right, level + 1);
    };

    bfs(root, 0);

    return arr.reverse();
}
