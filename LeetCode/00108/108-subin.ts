
function sortedArrayToBST(nums: number[]): TreeNode | null {
    
    const makeTree = (left:number, right: number): TreeNode | null => {
        if(left > right) return null;
        const mid = Math.floor((left + right) / 2);
        const node = new TreeNode(nums[mid]);
        node.left = makeTree(left, mid-1);
        node.right = makeTree(mid + 1, right);

        return node;
    }

    return makeTree(0, nums.length-1);
};
