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

function recoverTree(root: NullableTreeNode): void {
  if (root == null) {
    return;
  }

  let prevNode: NullableTreeNode = null;
  let maxNode: NullableTreeNode = null;
  let minNode: NullableTreeNode = null;

  const _inOrder = (node: NullableTreeNode) => {
    if (node == null) {
      return;
    }

    _inOrder(node.left);

    if (prevNode != null && prevNode.val > node.val) {
      if (maxNode == null) {
        maxNode = prevNode;
      }
      minNode = node;
    }
    prevNode = node;

    _inOrder(node.right);

    return;
  };

  _inOrder(root);
  [maxNode!.val, minNode!.val] = [minNode!.val, maxNode!.val];

  return;
}
