//https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/

class Solution {
    public TreeNode sortedArrayToBST(int[] nums) {
        return buildSubTree(nums, 0, nums.length - 1);
    }

    TreeNode buildSubTree(int[] nums, int start, int end) {//해당하는 구간에 대한 서브트리 생성 함수
        if (start > end) {
            return null;
        }

        int now = (start + end) / 2;//남은 구간의 가운데를 현재 서브 트리의 부모 노드로 지정
        TreeNode node = new TreeNode(nums[now]);//부모 노드 생성

        node.left = buildSubTree(nums, start, now - 1);//부모 노드를 제외한 왼쪽 구간에 대한 하위 서브 트리 생성
        node.right = buildSubTree(nums, now + 1, end);//부모 노드를 제외한 오른쪽 구간에 대한 하위 서브 트리 생성

        return node;//노드 반환
    }
}