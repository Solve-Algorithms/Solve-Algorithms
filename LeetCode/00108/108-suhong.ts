function sortedArrayToBST(nums: number[]): TreeNode | null {
    if (nums.length === 0) {
        return null;
    }

    const mid = Math.floor(nums.length / 2);
    const leftNode = sortedArrayToBST(nums.slice(0, mid));
    const rightNode = sortedArrayToBST(nums.slice(mid + 1));

    return new TreeNode(nums[mid], leftNode, rightNode);
}
