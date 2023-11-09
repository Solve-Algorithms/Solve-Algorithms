import { TreeNode } from "../common";

function levelOrder(root: TreeNode | null): number[][] {
    const answer: number[][] = [];
    const dfs = (node: TreeNode | null, level: number) => {
        if (!node) return;
        if (answer.length > level) {
            answer[level].push(node.val);
        } else {
            answer.push([node.val]);
        }
        dfs(node.left, level + 1);
        dfs(node.right, level + 1);
    };

    dfs(root, 0);

    return answer;
}
