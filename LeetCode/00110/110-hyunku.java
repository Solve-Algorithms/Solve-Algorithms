package com.algorithm;

//https://leetcode.com/problems/balanced-binary-tree/

class Solution {
    public boolean isBalanced(TreeNode root) {
        return checkHeightBalanced(root);
    }

    boolean checkHeightBalanced(TreeNode node) {
        if (node == null) {
            return true;
        }

        int leftSubTreeMaxLevel = getMaxLevel(node.left, 0);
        int rightSubTreeMaxLevel = getMaxLevel(node.right, 0);

        if (Math.abs(rightSubTreeMaxLevel - leftSubTreeMaxLevel) > 1) {
            return false;
        } else {
            return checkHeightBalanced(node.left)
                    && checkHeightBalanced(node.right);
        }
    }

    int getMaxLevel(TreeNode node, int level) {
        if (node == null) {
            return level;
        }

        return Math.max(getMaxLevel(node.left, level + 1), getMaxLevel(node.right, level + 1));
    }
}