import { countAndSay } from "./CountAndSay";

const testAndResult = [
    {
        input: 1,
        output: "1"
    },
    {
        input: 2,
        output: "11"
    },
    {
        input: 3,
        output: "21"
    },
    {
        input: 4,
        output: "1211"
    },
    {
        input: 5,
        output: "111221"
    },
];

describe("038 - Count and Say", () => {
    testAndResult.forEach((it, index) => {
        test(`test ${it.input}`, () => {
            const res = countAndSay(it.input);
            expect(res).toEqual(it.output);
        }); 
    })
});