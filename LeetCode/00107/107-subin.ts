function levelOrderBottom(root: TreeNode | null): number[][] {
    const ans:number[][] = [];

    const traverse = (node: TreeNode | null, level: number) => {
        if(!node) return;
        if(!ans[level]) ans.push([node.val]);
        else { ans[level].push(node.val) }

        traverse(node.left, level+1);
        traverse(node.right, level+1);
    }

    traverse(root, 0);

    return ans.reverse();
};
