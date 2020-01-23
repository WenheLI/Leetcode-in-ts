import { strStr } from "./ImplementStrStr";

const testAndResult = [
    {
        input: ["hello", "ll"],
        output: 2
    },
    {
        input: ["aaaaa", "bba"],
        output: -1
    },
];

describe("028 - Implement strStr", () => {
    testAndResult.forEach((it, index) => {
        test(`test ${it.input}`, () => {
            const res = strStr(it.input[0], it.input[1]);
            expect(res).toEqual(it.output);
        }); 
    })
})