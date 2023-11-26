//https://leetcode.com/problems/binary-tree-level-order-traversal-ii/

import java.util.ArrayList;
import java.util.List;

class Solution {
    List<List<Integer>> answer = new ArrayList<>();

    public List<List<Integer>> levelOrderBottom(TreeNode root) {
        int maxLevel = checkMaxLevel(root, 1);//트리 최대 레벨 체크

        for (int i = 0; i < maxLevel; i++) {//최대 레벨 만큼 미리 초기화
            answer.add(new ArrayList<>());
        }

        levelTraversal(root, 1, maxLevel);

        return answer;
    }

    void levelTraversal(TreeNode node, int level, int maxLevel) {
        if (node == null) {
            return;
        }

        levelTraversal(node.left, level + 1, maxLevel);

        answer.get(maxLevel - level).add(node.val);//최대 레벨 - 현재 레벨 위치의 ArrayList에 노드 값 삽입

        levelTraversal(node.right, level + 1, maxLevel);
    }

    int checkMaxLevel(TreeNode node, int level) {//트리 최대 레벨 확인
        if (node == null) {
            return level - 1;
        }

        return Math.max(checkMaxLevel(node.left, level + 1), checkMaxLevel(node.right, level + 1));
    }
}