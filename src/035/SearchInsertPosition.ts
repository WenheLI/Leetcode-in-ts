
export function searchInsert(nums: number[], target: number): number {
    for (let i = 0; i < nums.length - 1; i++) {
        if (target > nums[i] && target <= nums[i + 1]) {
            return i + 1;
        }
    }
    if (target <= nums[0]) {
        return 0;
    }
    return nums.length;
}

export function binarySearchInsert(nums: number[], target: number): number {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        let mid = Math.floor((right + left) / 2);
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return left;
}