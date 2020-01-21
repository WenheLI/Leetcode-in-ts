export const removeElement = (nums: number[], val: number): number => {
    let i = 0;
    for (let j = 0; j < nums.length - i; j++) {
        if (nums[j] === val) {
            const temp = nums[j];
            nums[j] = nums[nums.length - i - 1];
            nums[nums.length - i - 1] = temp;
            i += 1;
            j -= 1;
        }
    }
    return nums.length - i;
}