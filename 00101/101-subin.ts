function isSymmetric(root: TreeNode | null): boolean {
    const mirrorTemp: any[] = [];
    let left = root?.left;
    let right = root?.right;

    const checkLeftTree = (root) => {
        if(root===null) {
            mirrorTemp.push(null);
            return;
        }
        checkLeftTree(root.left);
        checkLeftTree(root.right);
        mirrorTemp.push(root?.val);
    }

    const checkRightTree = (root) => {
        if(root===null) {
            if(mirrorTemp[0] !== null) throw new Error('not symetric');
            mirrorTemp.shift();
            return;
        }
        checkRightTree(root.right);
        checkRightTree(root.left);
        if(mirrorTemp[0] !== root.val) throw new Error('not symetric');
        mirrorTemp.shift();
    }

    checkLeftTree(left);
    try{
        checkRightTree(right);
    } catch { return false;}

    if(mirrorTemp.length > 0) return false;
    return true;
};
