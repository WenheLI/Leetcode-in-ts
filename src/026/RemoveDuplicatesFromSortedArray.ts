export const removeDuplicates = (nums: number[]): number => {
    let i = 0;
    while (true) {
        if (nums.length === 0 || i === nums.length - 1) {
            break;
        } else {
            if (nums[i] === nums[i + 1]) {
                nums.splice(i, 1);
            } else {
                i += 1;
            }
        }
    }
    return nums.length;
}