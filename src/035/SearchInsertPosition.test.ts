import { searchInsert, binarySearchInsert } from "./SearchInsertPosition";

const testAndResult = [
    {
        input: [[1,3,5,6], 5],
        output: 2
    },
    {
        input: [[1,3,5,6], 2],
        output: 1
    },
    {
        input: [[1,3,5,6], 7],
        output: 4
    },
    {
        input: [[1,3,5,6], 0],
        output: 0
    },
];

describe("035 - searchInsert", () => {
    testAndResult.forEach((it, index) => {
        test(`test ${it.input}`, () => {
            const res = searchInsert(it.input[0] as number[], it.input[1] as number);
            expect(res).toEqual(it.output);
        }); 
    })
});

describe("035 - searchInsert in Binary", () => {
    testAndResult.forEach((it, index) => {
        test(`test ${it.input}`, () => {
            const res = binarySearchInsert(it.input[0] as number[], it.input[1] as number);
            expect(res).toEqual(it.output);
        }); 
    })
})