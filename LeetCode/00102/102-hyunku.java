package com.algorithm;

//https://leetcode.com/problems/binary-tree-level-order-traversal/

import java.util.ArrayList;
import java.util.List;

public class LeetCode_102_Binary_Tree_Level_Order_Traversal {
}

class Solution_LeetCode_102_Binary_Tree_Level_Order_Traversal {
    List<List<Integer>> answer = new ArrayList<>();

    public List<List<Integer>> levelOrder(TreeNode root) {
        levelTraversal(root, 0);
        return answer;
    }

    void levelTraversal(TreeNode node, int level){
        if (node == null) {
            return;
        }

        if (answer.size() == level) {//해당 레벨에 대한 List가 생성되지 않았다면 생성
            answer.add(new ArrayList<>());
        }

        levelTraversal(node.left, level + 1);

        answer.get(level).add(node.val);

        levelTraversal(node.right, level + 1);
    }
}