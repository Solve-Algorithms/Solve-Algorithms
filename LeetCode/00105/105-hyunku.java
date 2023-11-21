package com.algorithm;

//https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/

/**
 * preorder -> VLR
 * inorder -> LVR
 * postorder -> LRV
 */

class Solution {
    int preorderIndex = 0;

    public TreeNode buildTree(int[] preorder, int[] inorder) {
        return makeSubTree(preorder, inorder, 0, inorder.length - 1);
    }

    public TreeNode makeSubTree(int[] preorder, int[] inorder, int inorderStart, int inorderEnd) {
        if (inorderStart > inorderEnd) {//탐색할 서브트리 구역이 없다면
            return null;
        }

        TreeNode node = new TreeNode(preorder[preorderIndex]);//현 인덱스 기반 노드 생성

        for (int i = inorderStart; i <= inorderEnd; i++) {//전체 서브 트리 구간 중
            if (preorder[preorderIndex] == inorder[i]) {//현재 LVR에서 현재 V를 찾았다면
                ++preorderIndex;

                node.left = makeSubTree(preorder, inorder, inorderStart, i - 1);//L구간에 대해 트리 생성 진행
                node.right = makeSubTree(preorder, inorder, i + 1, inorderEnd);//R구간에 대해 트리 생성 진행

                break;
            }
        }

        return node;
    }
}