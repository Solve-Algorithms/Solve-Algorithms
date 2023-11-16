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

type NullableTreeNode = TreeNode | null;

function isSymmetric(root: NullableTreeNode): boolean {
  const _isSymmetric = (nodeA: NullableTreeNode, nodeB: NullableTreeNode) => {
    if (nodeA == null && nodeB == null) {
      return true;
    }
    if (nodeA == null || nodeB == null) {
      return false;
    }
    if (nodeA.val !== nodeB.val) {
      return false;
    }
    return (
      _isSymmetric(nodeA.left, nodeB.right) &&
      _isSymmetric(nodeA.right, nodeB.left)
    );
  };

  return _isSymmetric(root, root);
}
