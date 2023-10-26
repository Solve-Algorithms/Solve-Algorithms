package com.algorithm;

//https://leetcode.com/problems/recover-binary-search-tree/

import java.util.ArrayList;
import java.util.Collections;

public class LeetCode_99_Recover_Binary_Search_Tree {
}

class Solution_LeetCode_99_Recover_Binary_Search_Tree {
    ArrayList<TreeNode> nodes = new ArrayList<>();
    ArrayList<Integer> nodeValues = new ArrayList<>();

    public void recoverTree(TreeNode root) {
        inorderTraversal(root);//중위 순회
        Collections.sort(nodeValues);//전체 트리 속 값들을 오름차순 정렬

        for (int i = 0; i < nodes.size(); i++) {//노드를 돌며 올바른 값을 삽입
            nodes.get(i).val = nodeValues.get(i);
        }
    }

    void inorderTraversal(TreeNode node){//중위순회
        if (node == null) {
            return;
        }

        inorderTraversal(node.left);
        nodes.add(node);//중위 순회를 돌며 해당 노드를 ArrayList에 삽입
        nodeValues.add(node.val);//해당 값 또한 따로 삽입
        inorderTraversal(node.right);
    }
}