import { addBinary } from "./AddBinary";

const testAndResult = [
    {
        input: ["11", "1"],
        output: "100"
    },
    {
        input: ["1010", "1011"],
        output: "10101"
    },
];

describe("067 - Add Binary", () => {
    testAndResult.forEach((it, index) => {
        test(`test ${it.input}`, () => {
            const res = addBinary(it.input[0], it.input[1]);
            expect(res).toEqual(it.output);
        }); 
    })
})