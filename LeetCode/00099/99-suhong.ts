class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}

const isSymmetric = (root: TreeNode | null): boolean => {
    if (!root) return true;

    const leftTreeStr = getTreeStr(root.left, true);
    const rightTreeStr = getTreeStr(root.right, false);

    return leftTreeStr === rightTreeStr;
};

const getTreeStr = (node: TreeNode | null, isPreorder: boolean): string => {
    if (!node) {
        return "n";
    }

    return (
        getTreeStr(isPreorder ? node.left : node.right, isPreorder) +
        getTreeStr(isPreorder ? node.right : node.left, isPreorder) +
        String(node.val)
    );
};
