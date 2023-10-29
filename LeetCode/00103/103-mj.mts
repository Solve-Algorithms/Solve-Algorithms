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

function zigzagLevelOrder(root: NullableTreeNode): number[][] {
  const answer: number[][] = [];

  const recursive = (node: NullableTreeNode, depth: number) => {
    if (node == null) {
      return;
    }

    if (answer[depth] == null) {
      answer[depth] = [node.val];
    } else {
      answer[depth] =
        depth % 2 === 0
          ? [...answer[depth], node.val]
          : [node.val, ...answer[depth]];
    }

    recursive(node.left, depth + 1);
    recursive(node.right, depth + 1);
  };

  recursive(root, 0);
  return answer;
}
