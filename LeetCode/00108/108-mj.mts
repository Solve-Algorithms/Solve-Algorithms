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

function sortedArrayToBST(nums: number[]): NullableTreeNode {
  if (nums.length === 0) return null;

  const rootIndex = Math.floor(nums.length / 2);
  return new TreeNode(
    nums[rootIndex],
    sortedArrayToBST(nums.slice(0, rootIndex)), // left recursive
    sortedArrayToBST(nums.slice(rootIndex + 1, nums.length)) // right recursive
  );
}
