import {maxSubArray, maxSubArrayGreedy, maxSubArrayDP} from "./MaximumSubarray"

const testAndResult = [
    {
        input:  [-2,1,-3,4,-1,2,1,-5,4],
        output: 6
    },
];

describe("053 - Maximum Subarray", () => {
    testAndResult.forEach((it, index) => {
        test(`test ${it.input}`, () => {
            const res = maxSubArray(it.input);
            expect(res).toEqual(it.output);
        }); 
    })
})

describe("053 - Maximum Subarray in DP", () => {
    testAndResult.forEach((it, index) => {
        test(`test ${it.input}`, () => {
            const res = maxSubArrayGreedy(it.input);
            expect(res).toEqual(it.output);
        }); 
    })
})


describe("053 - Maximum Subarray in DP", () => {
    testAndResult.forEach((it, index) => {
        test(`test ${it.input}`, () => {
            const res = maxSubArrayDP(it.input);
            expect(res).toEqual(it.output);
        }); 
    })
})