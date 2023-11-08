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
interface RecursionProps {
  start: number;
  end: number;
}
type NullableTreeNode = TreeNode | null;

function buildTree(preorder: number[], inorder: number[]): NullableTreeNode {
  if (!preorder || !inorder) {
    return null;
  }

  const indexMap = new Map<number, number>();
  for (let i = 0; i < inorder.length; i++) {
    indexMap.set(inorder[i], i);
  }

  const recursion = ({ start, end }: RecursionProps): NullableTreeNode => {
    if (start > end) {
      return null;
    }
    const targetVal = preorder[0];
    preorder.shift();

    const root = new TreeNode(targetVal);
    root.left = recursion({
      start,
      end: (indexMap.get(targetVal) ?? 0) - 1,
    });
    root.right = recursion({
      start: (indexMap.get(targetVal) ?? 0) + 1,
      end,
    });
    return root;
  };

  return recursion({ start: 0, end: inorder.length - 1 });
}
