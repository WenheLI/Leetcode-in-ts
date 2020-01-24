export const sum = (nums: number[]): number => {
    return nums.reduce((prev, curr) => {
        return curr + prev;
    }, 0);
}
