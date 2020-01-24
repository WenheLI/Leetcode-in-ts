import { sum } from "../common/Array";

// brute forth
export const maxSubArray = (nums: number[]): number => {
    let max = Number.NEGATIVE_INFINITY;
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j <= nums.length; j++) {
            const temp = sum(nums.slice(i, j));
            if (temp > max) {
                max = temp;
            }
        }
    }
    return max;
};

// Greedy
export const maxSubArrayGreedy = (nums: number[]): number => {
    let curr = nums[0];
    let max = Number.NEGATIVE_INFINITY;
    for (let i = 1; i < nums.length; i++) {
        curr = Math.max(curr + nums[i], nums[i]);
        if (curr > max) {
            max = curr;
        }
    }
    return max;
}

// DP
export const maxSubArrayDP = (nums: number[]): number => {
    let max = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (nums[i - 1] > 0) {
            nums[i] += nums[i - 1];
        }
        max = Math.max(nums[i], max);
    }
    return max;
}