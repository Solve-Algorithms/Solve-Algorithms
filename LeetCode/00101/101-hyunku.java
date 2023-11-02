package com.algorithm;

//https://leetcode.com/problems/symmetric-tree/

public class LeetCode_101_Symmetric_Tree {
}

class Solution_LeetCode_101_Symmetric_Tree {
    public boolean isSymmetric(TreeNode root) {
        return checkSymmetric(root.left, root.right);
    }

    boolean checkSymmetric(TreeNode node1, TreeNode node2) {
        if (node1 == null || node2 == null) {
            if (node1 == null && node2 == null) {//양쪽 노드 모두 null이면
                return true;
            } else {//한 쪽만 null이면
                return false;
            }
        }

        if (node1.val != node2.val) {//값이 다르면
            return false;
        } else {//값이 같다면, node1의 왼쪽/node2의 오른쪽, node1의 오른쪽/node2의 왼쪽을 비교한 결과를 AND 연산해 반환
            return (checkSymmetric(node1.left, node2.right) && (checkSymmetric(node1.right, node2.left)));
        }
    }
}