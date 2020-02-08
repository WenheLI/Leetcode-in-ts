import { climbStairs } from "./ClimbingStairs";

const testAndResult = [
    {
        input: 9,
        output: 55
    },
    {
        input: 2,
        output: 2
    },
];

describe("067 - Add Binary", () => {
    testAndResult.forEach((it, index) => {
        test(`test ${it.input}`, () => {
            const res = climbStairs(it.input);
            expect(res).toEqual(it.output);
        }); 
    })
})